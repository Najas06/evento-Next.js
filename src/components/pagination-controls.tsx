import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};
const btnStyle =
  "text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 transition text-sm";
const PaginationControls = ({
  previousPath,
  nextPath,
}: PaginationControlsProps) => {
  return (
    <section className="flex justify-between w-full ">
      {previousPath ? (
        <Link href={previousPath} className={btnStyle}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyle}>
          <ArrowRightIcon />
          Next
        </Link>
      )}
    </section>
  );
};

export default PaginationControls;
