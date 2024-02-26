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
import Pagination from "../../components/Pagination/Paginate";
import useAuth from "../Login/useAuth";
const values = [{ name: "Add Prospect", path: "/add-prospect" }];

const Prospects = () => {
  const navigate = useNavigate();
  const {
    allProspects,
    getProspects,
    disableProspect,
    isLoading,
    setAllProspects,
    search,
    setSearch,
    getProspectsPaginate,
    page,
    totalPages,
  } = useProspects();

  const user = useAuth();

  useEffect(() => {
    getProspectsPaginate(user.id, 1, search);
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
        <Pagination
          page={page}
          totalPages={totalPages}
          handlerGetFunction={getProspectsPaginate}
          context={"prospects"}
          search={search}
        />
      </ProspectsList>
      <PanelRight>
        <Searcher
          list={allProspects}
          setList={setAllProspects}
          context={"prospects"}
          searchToGet={search}
          setSearchToGet={setSearch}
          getFunction={getProspectsPaginate}
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
