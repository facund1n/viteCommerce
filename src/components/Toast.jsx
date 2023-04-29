import { useToast } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";

const Toast = () => {
  const toast = useToast();
  const statuses = ["success", "error"];

  return (
    <Wrap>
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          {() =>
            toast({
              title: `${status}`,
              status: status,
              isClosable: true,
            })
          }
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Toast;
