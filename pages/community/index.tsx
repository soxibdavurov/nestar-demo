import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
    console.log("COMMUNITY COMPONENT PAGES ROUTER");
    const [title, setTitle] = useState<string>("hello");
    return (<div> Community {""}

        <button onClick={() => alert("Hello MIT")}>PressMe</button>
    </div>
    );
};

export default withLayoutBasic(Community);