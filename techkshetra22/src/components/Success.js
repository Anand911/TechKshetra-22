import { Button } from '@cred/neopop-web/lib/components';
import { Link, useParams } from "react-router-dom";

const Success = () => {

    let { id } = useParams();
    console.log(id);

	return (
	<div className="pt-24 text-center h-screen">
		<h3 className="mt-36 mb-20">Thanks for your payment</h3>
        <p>Our team will shortly verify your payment. The 'Register' button will turn to 'Registered ' if it is approved</p>
		<div className="mb-40">
            <Link to="/dashboard">
                <Button
                    variant="primary"
                    kind="elevated"
                    size="big"
                    colorMode="light"
                >
                    View in Dashboard
                </Button>
            </Link>
        </div>
	</div>
	);
};
export default Success;
