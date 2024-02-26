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
import useUsers from "../Users/useUsers";

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
    changeProspectStatus,
    changeInterestLevel,
  } = useProspects();

  const userLocalStorage = useAuth();
  const { getUserById, user } = useUsers();
  useEffect(() => {
    getProspectsPaginate(userLocalStorage.id, 1, search);
    getUserById(userLocalStorage.id);
  }, []);

  return (
    <ProspectsContainer>
      <ProspectsList>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <ProspectsTable
            changeProspectStatus={changeProspectStatus}
            allProspects={allProspects}
            disableProspect={disableProspect}
            isLoading={isLoading}
            changeInterestLevel={changeInterestLevel}
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
        {user.role === "Client" ? null : user.role?.length ? (
          <ButtonBar onClick={() => navigate("/add-prospect")}>
            Add Prospect
          </ButtonBar>
        ) : null}
      </PanelRight>
    </ProspectsContainer>
  );
};

export default Prospects;
