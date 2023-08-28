import ButtonFilled from "@/app/_components/Buttons/ButtonFilled";
import Header from "@/app/_components/Headers/Header";
import TextInput from "@/app/_components/Inputs/TextInput";
import InfoTile from "@/app/_components/Others/InfoTile";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="w-[550px] float-left">
        <Header text="Details" />
        <form>
          <TextInput label="Name" />
          <TextInput label="Plant" />
          <TextInput label="City" />
          <TextInput label="Street" />
          <TextInput label="Lattitude" />
          <TextInput label="Longitude" />
          <div className="flex justify-end">
            <ButtonFilled
              text="Delete"
              className="bg-[#F83A3A] w-[100px] mr-2"
            />
            <ButtonFilled text="Save" className="w-[100px]" />
          </div>
        </form>
      </div>
      <div className="float-left pl-10">
        <Header text="Info" />
        <InfoTile title="Added" value="05.04.2023, 14:10" />
        <InfoTile title="Amount of waterings" value="54" />
        <InfoTile title="Connection state" value="Connected" />
        <InfoTile title="Last update" value="10.06.2023, 9:03" />
      </div>
    </div>
  );
};

export default page;
