"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

function PaginationControls({
  currentPage,
  totalResults,
  perPage,
  query,
}: {
  currentPage: string;
  totalResults: string;
  perPage: string;
  query: string;
}) {
  const { replace } = useRouter();
  const totalPages = Math.ceil(parseInt(totalResults) / parseInt(perPage));
  const currentPageNum = parseInt(currentPage);
  const pageStart = Math.max(1, currentPageNum - 2);
  const pageEnd = Math.min(totalPages, currentPageNum + 2);
  const perPageNum = parseInt(perPage);

  const hasPreviousPage = (): boolean => parseInt(currentPage) > 1;

  const hasNextPage = (): boolean => parseInt(currentPage) !== totalPages;

  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let i = pageStart; i <= pageEnd; i++) {
      paginationItems.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPageNum === i}
            onClick={() => replace(`/results?query=${query}&page=${i}`)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return paginationItems;
  };

  return (
    <Pagination className="text-neutral-200 ">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            disabled={!hasPreviousPage()}
            onClick={(): void =>
              replace(
                `/results?query=${query}&page=${parseInt(currentPage) - 1}`
              )
            }
          />
        </PaginationItem>

        
        {renderPaginationItems()}

        {/* Elipsis / last page */}
        {totalPages > 5 ? (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                onClick={(): void =>
                  replace(`/results?query=${query}&page=${totalPages}`)
                }
                isActive={currentPageNum === totalPages}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        ) : null}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            disabled={!hasNextPage()}
            onClick={(): void =>
              replace(
                `/results?query=${query}&page=${parseInt(currentPage) + 1}`
              )
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationControls;
