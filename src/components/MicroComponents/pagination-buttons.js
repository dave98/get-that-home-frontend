import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { colors } from "../../style";
import {
  NextPrevButton,
  PaginationButton,
  PaginationButtonsWrapper,
} from "./styles";

const PaginationButtons = ({ currentPage, totalPages, paginate, ...props }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationButtonsWrapper {...props}>
      {currentPage !== 1 && (
        <NextPrevButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(currentPage - 1)}
        >
          <BiChevronLeft size={25} />
        </NextPrevButton>
      )}
      {pages.map((page) => (
        <PaginationButton
          key={page}
          onClick={() => paginate(page)}
          disabled={page === currentPage}
          style={{
            backgroundColor:
              page === currentPage ? `${colors.blues.shallow}` : "",
          }}
        >
          {page}
        </PaginationButton>
      ))}
      {currentPage < totalPages && (
        <NextPrevButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(currentPage + 1)}
        >
          <BiChevronRight size={25} />
        </NextPrevButton>
      )}
    </PaginationButtonsWrapper>
  );
};

export default PaginationButtons;
