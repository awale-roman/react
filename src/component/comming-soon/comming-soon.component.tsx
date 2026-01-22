import { useNavigate, useParams } from "react-router";

import { Card } from "antd";

const CommingSoon = () => {
  const params = useParams();
  const navigate = useNavigate();
  const goback = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <div className="h-screen w-full bg-red-400">
        <div className="flex max-w-lg h-full item-center justify-center">
          <Card
            className="h-[500px]"
            size="default"
            title={<title>Comming Soon...</title>}
          >
            <p>Comming Soon of Data: {params.slug}</p>
            <a href="/" onClick={goback}>
              Go back
            </a>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CommingSoon;
