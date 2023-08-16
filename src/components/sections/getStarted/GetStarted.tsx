import Button from "@/components/button/Button";

const GetStarted = () => {
    return (
        <div className="my-16 flex flex-col justify-center text-center">
            <div className="text-4xl ">Ready to get started?</div>
            <p>Create a River account and buy Bitcoin in minutes.</p>
            <div>

            <Button>
                Sign Up
            </Button>
            </div>
        </div>
    );
}

export default GetStarted;
