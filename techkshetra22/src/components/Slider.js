
export default function Slider({words}) {
    return (
      <div className="flex h-20 items-center justify-center smm:h-12">
        {/* 1. */}
        <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative smm:h-12">
          {/* 2. */}
          <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate smm:h-12">
            {/* 3 */}
            {words.map((i) => {
              return (
                <div className="flex justify-center items-start w-[20rem]">
                  <p>{i}</p>
                </div>
              );
            })}
            {words.map((i) => {
              return (
                <div className="flex justify-center items-start w-[20rem]">
                  <p>{i}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }