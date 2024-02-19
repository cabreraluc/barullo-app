import {
  ProspectsContainer,
  ProspectsList,
  PanelRight,
  ButtonBar,
} from "./prospectsStyles";
import { useNavigate } from "react-router-dom";
import useProspects from "./useProspects";
import { useEffect } from "react";
import ProspectsTable from "../../components/Prospects/ProspectsTable";
import Loader from "../../componentsCss/Loader/Loader";
import Searcher from "../../components/Searcher/Searcher";
const values = [{ name: "Add Prospect", path: "/add-prospect" }];

const Prospects = () => {
  const navigate = useNavigate();
  const {
    allProspects,
    getProspects,
    disableProspect,
    isLoading,
    setAllProspects,
  } = useProspects();

  useEffect(() => {
    getProspects();
  }, []);

  return (
    <ProspectsContainer>
      <ProspectsList>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <ProspectsTable
            allProspects={allProspects}
            disableProspect={disableProspect}
            isLoading={isLoading}
          />
        )}
      </ProspectsList>
      <PanelRight>
        <Searcher
          list={allProspects}
          setList={setAllProspects}
          context={"prospects"}
        />
        {values.map((e) => (
          <ButtonBar onClick={e.path ? () => navigate(e.path) : null}>
            {e.name}
          </ButtonBar>
        ))}
      </PanelRight>
    </ProspectsContainer>
  );
};

export default Prospects;
