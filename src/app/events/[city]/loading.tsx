import Skeleton from "@/components/skeleton"
import SkeletonCard from "@/components/skeleton-card"

const loading = () => {
  return (
    <div className="flex flex-wrap max-w-[1100px] mx-auto px-[20px] py-24 gap-20 justify-center
    +">
      {
        Array.from({length:9}).map((item,i)=>(
          <SkeletonCard key={i} />
        ))
      }
    </div>
  )
}

export default loading