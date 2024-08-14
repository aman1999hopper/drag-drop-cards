import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "../components/main.css"

const Card = ({ id, content, onShowMore }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleShowMore = () => {
    setIsCollapsed(!isCollapsed);
    onShowMore(content);
  };

  return (
    <Draggable>
      <ResizableBox
        width={200}
        height={150}
        minConstraints={[150, 100]}
        maxConstraints={[400, 300]}
        className="box"
      >
        <div className="card-container">
          <div style={{ height: "100%" }}>
            <p>{isCollapsed ? content.substring(0, 50) + "..." : content}</p>
            <button className="show-more" onClick={handleShowMore}>
              {isCollapsed ? "Show More" : "Show Less"}
            </button>
          </div>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default Card;
