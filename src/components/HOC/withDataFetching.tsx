import { CircularProgress } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const withDataFetching = (url: string) => (WrappedComponent: any) => {
  return function WithDataFetching(props: any) {
    const [data, setData] = useState();
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // useEffect(() => {
    //   if (error) {
    //   }
    // }, [error]);

    useEffect(() => {
      const fetchData = async () => {
        const id = props.params?.slug ? `/${props.params?.slug}` : "";

        try {
          const response = await axios.get(`${url}${id}`);
          setData(response.data);
        } catch (_error) {
          console.log("Erro", error);
          setError("Erro ao tentar realizar a consulta.");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, [props.params?.slug]);
    return (
      <>
        {error ? (
          <Alert severity="error" variant="filled" sx={{ marginTop: "100px"}}>
            <AlertTitle>Erro</AlertTitle>
            {error}
          </Alert>
        ) : undefined}
        <WrappedComponent {...props} data={data} error={error} />
        {isLoading ? (
          <CircularProgress
            sx={{
              position: "absolute",
              top: "calc(100vh /2)",
              left: "calc(100vw /2)",
            }}
          />
        ) : undefined}
      </>
    );
  };
};
