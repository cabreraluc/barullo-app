import {
  ClientsContainer,
  ClientsList,
  PanelRight,
  ButtonBar,
} from "./clientsStyles";
import { useNavigate } from "react-router-dom";
import useClients from "./useClients";
import { useEffect } from "react";
import ClientsTable from "../../components/Clients/ClientsTable";
import Loader from "../../componentsCss/Loader/Loader";
import Searcher from "../../components/Searcher/Searcher";
const values = [{ name: "Add Client", path: "/add-client" }];

const Clients = () => {
  const navigate = useNavigate();
  const { allClients, getClients, disableClient, isLoading, setAllClients } =
    useClients();

  useEffect(() => {
    getClients();
  }, []);

  return (
    <ClientsContainer>
      <ClientsList>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <ClientsTable
            allClients={allClients}
            disableClient={disableClient}
            isLoading={isLoading}
          />
        )}
      </ClientsList>
      <PanelRight>
        <Searcher
          list={allClients}
          setList={setAllClients}
          context={"clients"}
        />
        {values.map((e) => (
          <ButtonBar onClick={e.path ? () => navigate(e.path) : null}>
            {e.name}
          </ButtonBar>
        ))}
      </PanelRight>
    </ClientsContainer>
  );
};

export default Clients;
