import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center top-28 absolute">
      <Oval
        visible={true}
        height="60"
        width="60"
        color="#4AAE48"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
