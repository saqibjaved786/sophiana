import { Container } from "../../../components/Container";
import { images } from "../../../assets/images";
import Input from "../../../components/forms/Input";
import FormCheck from "../../../components/forms/FormCheck";
import Textarea from "../../../components/forms/Textarea";
import Button from "../../../components/Button";
import { Parallax } from "react-scroll-parallax";

const TreasuresSection = () => {
  return (
    <div className="sm:py-[6.35rem] bg-skin">
      <Container className="!px-0 sm:!px-4">
        <div className="flex justify-between items-center sm:flex-row flex-col gap-[3.5rem] xl:gap-[6.875rem]">
          <Parallax translateY={["100px", "-100px"]}>
            <div className="flex-1 ">
              <img src={images.contact} alt="contact" />
            </div>
          </Parallax>
          <form className="w-full sm:w-[40%] px-6 sm:px-0 space-y-2">
            <div className="flex gap-2">
              <Input placeholder="FIRST NAME*" />
              <Input placeholder="LAST NAME*" />
            </div>
            <Input placeholder="EMAIL ADDRESS*" />
            <Input placeholder="COMPANY" />
            <Input placeholder="LOCATION*" />
            <Input placeholder="PHONE NUMBER*" type="number" />
            <div className="border border-borderColor p-2">
              <p className="text-[10px] mb-2 font-inter-extraLight text-primary">
                TELL US WHO YOU ARE*
              </p>
              <FormCheck type="radio" label="JEWELLER" name="JEWELLER" />
              <FormCheck
                type="radio"
                label="PERSONAL SHOPPER"
                name="JEWELLER"
              />
              <FormCheck type="radio" label="COLLECTORS" name="JEWELLER" />
            </div>
            <Input placeholder="WHATSAPP/LINE/WECHAT:" />
            <Textarea
              name=""
              className="h-[243px]"
              placeholder="MESSAGE*  For applying, please include your website, social media if you have any."
            />
            <div className="text-center pt-10 pb-20 sm:pb-0 sm:pt-12">
              <Button
                variant="outline"
                color="primary"
                className="!text-sm w-[247px] !py-1 uppercase !font-inter-medium !border-borderColor"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default TreasuresSection;
