import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import EventsComponentMore from "../../components/EventsComponentMore/index/SimpleTabs";
import News from "./News"

export default function Homepage() {
  const dispatch = useDispatch();

  return (
    <div>
      <News />
    </div>
  );
}
