import { Button } from '@cred/neopop-web/lib/components';

const Card = ({title, desc, image}) => {
    return (
        <div className='text-black'>
            <div className="my-20 w-1/5 h-96 bg-gradient-to-tr from-[rgba(80,42,120,255)] via-[rgba(56,50,134,255)] to-[rgba(8,107,162,255)]"></div>
            <div className="flex flex-col justify-around relative bottom-[28rem] left-3 w-1/5 px-4 h-96 bg-white">
                <img className='w-72' src={image} />
                <h4 className='my-3 text-3xl font-bold'>{title}</h4>
                <p className='pb-10 text-2xls'>{desc}</p>
                <div><Button
                    className=''
                    variant="primary"
                    kind="elevated"
                    size="big"
                    colorMode="dark"
                    onClick={() => {
                        console.log("I'm clicked");
                    }}
                >View More
                </Button>
            </div>
            </div>
        </div>
    );
  };
  
  export default Card;