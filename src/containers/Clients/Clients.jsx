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
import Pagination from "../../components/Pagination/Paginate";
const values = [{ name: "Add Client", path: "/add-client" }];

const Clients = () => {
  const navigate = useNavigate();
  const {
    allClients,
    getClients,
    disableClient,
    isLoading,
    setAllClients,
    getClientsPaginate,
    setPage,
    page,
    totalPages,
    search,
    setSearch,
  } = useClients();

  useEffect(() => {
    getClientsPaginate(null, 1, search);
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
        <Pagination
          page={page}
          totalPages={totalPages}
          handlerGetFunction={getClientsPaginate}
          context={"clients"}
          search={search}
        />
      </ClientsList>
      <PanelRight>
        <Searcher
          list={allClients}
          setList={setAllClients}
          context={"clients"}
          searchToGet={search}
          setSearchToGet={setSearch}
          getFunction={getClientsPaginate}
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
