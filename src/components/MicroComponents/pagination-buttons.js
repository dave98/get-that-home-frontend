import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { colors } from "../../style";
import { PaginationButton, PaginationButtonsWrapper } from "./styles";

const PaginationButtons = ({ currentPage, totalPages, onClick, ...props }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <PaginationButtonsWrapper {...props}>
      {currentPage !== 1 && <BiChevronLeft />}
      {pages.map((page) => (
        <PaginationButton
          key={page}
          onClick={() => onClick(page)}
          disabled={page === currentPage}
          style={{
            backgroundColor:
              page === currentPage ? `${colors.blues.shallow}` : "",
          }}
        >
          {page}
        </PaginationButton>
      ))}
      {currentPage < totalPages && <BiChevronRight />}
    </PaginationButtonsWrapper>
  );
};

export default PaginationButtons;
