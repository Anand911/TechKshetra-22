import { Button } from '@cred/neopop-web/lib/components';

const Card = ({title, desc, image}) => {
    return (
        <div className="text-black w-76 flex flex-col justify-around h-full m-4 p-2 bg-white ">
            <img className='w-72 ml-10' src={image} />
            <h4 className='my-2 text-3xl font-bold'>{title}</h4>
            <p className='pb-3 text-2xls'>{desc}</p>
            <div className='bg-black py-2 px-4'>
                <Button
                    className=''
                    variant="primary"
                    kind="elevated"
                    size="big"
                    colorMode="light"
                    onClick={() => {
                        console.log("I'm clicked");
                    }}
                >View More
                </Button>
            </div>
        </div>
    );
  };
  
  export default Card;