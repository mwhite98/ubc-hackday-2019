import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

const COLOURS = {
  white: "#F5F5F5",
  black: "#292929",
  blue: "#9EC6FF",
  pink: "#FFCAA4",
}

const FONT_TITLE = {
  family: "acumin-pro",
  weight: "500px",
  style: "normal",
  sizeBig: "36px",
  sizeSmall: "24px",
}

const FONT_BODY = {
  family: "adelle-sans",
  weight: "300px",
  style: "normal",
}

// Global Styles
export const Title = styled.div`
  padding: 20px, 20px, 20px, 20px;
  font-size: ${FONT_TITLE.sizeBig};
  color: ${COLOURS.white};
  font-family: ${FONT_TITLE.family}, "sans-serif";
  font-weight: ${FONT_TITLE.weight};
  font-style: ${FONT_TITLE.style};
  font-size: ${FONT_TITLE.sizeBig};
`;

export const MentorTitle = styled.div`
  padding: 10px, 10px, 10px, 10px;
  font-size: 32px;
  color: ${COLOURS.black};
  font-family: ${FONT_TITLE.family}, "sans-serif";
  font-weight: ${FONT_TITLE.weight};
  font-style: ${FONT_TITLE.style};
  font-size: ${FONT_TITLE.sizeBig};
`;

// Mentor Specific Styles

export const MentorBox = styled.div`
  background-color: ${COLOURS.white};
  height: 100%;
`;

// Event Specific Styles

export const EventBox = styled.div`
  background-color: ${COLOURS.black};
  height: 100%;
`;

export const Event = styled.div`
  background-color: ${COLOURS.white};
  font-family: ${FONT_BODY.family}, "sans-serif";
  font-weight: ${FONT_BODY.weight};
  font-style: ${FONT_BODY.style};
  width: 90%;
  border-radius: 4px;
  margin: auto;
`;

export const EventName = styled.p`
  font-size: 24px;
  color: black;
  text-align: centre;
  padding: 10px, 10px, 10px, 10px;
  margin: 10px, 10px, 10px, 10px;
  display: inline;
  float: left;
`;

// Comment Specific Styles

export const CommentBox = styled.div`
  font-size: 16px;
  border-radius: 4px;
  border-style: solid;
  border-color: black;
`;

export const Name = styled.p`
  font-size: 24px;
  color: black;
  text-align: left;
  padding: 2px, 2px, 2px, 2px;
  display: inline;
  float: left;
`;

export const Badge = styled.a`
  background-color: ${COLOURS.pink};
  border-radius: 4px;
  color: ${COLOURS.black};
  float: right;
  padding: 2px, 2px, 2px, 2px;
`;

export const Comment = styled.p`
  font-size: 16px;
  text-align: left;
  padding: 2px, 2px, 2px, 2px;
`;