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
  font-size: 32px;
  color: ${COLOURS.white};
  font-family: ${FONT_TITLE.family}, "sans-serif";
  font-weight: ${FONT_TITLE.weight};
  font-style: ${FONT_TITLE.style};
  font-size: ${FONT_TITLE.sizeBig};
`;

export const MentorTitle = styled.div`
  font-size: 32px;
  color: ${COLOURS.white};
  font-family: ${FONT_TITLE.family}, "sans-serif";
  font-weight: ${FONT_TITLE.weight};
  font-style: ${FONT_TITLE.style};
  font-size: ${FONT_TITLE.sizeBig};
`;

// Event Specific Styles

export const EventBox = styled.div`
  background-color: ${COLOURS.black};
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const Event = styled.div`
  background-color: ${COLOURS.white};
  font-family: ${FONT_BODY.family}, "sans-serif";
  font-weight: ${FONT_BODY.weight};
  font-style: ${FONT_BODY.style};
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
  padding: 10px, 10px, 10px, 10px;
  margin: 10px, 10px, 10px, 10px;
  display: inline;
  float: left;
`;

export const Badge = styled.a`
  background-color: ${COLOURS.pink};
  border-radius: 4px;
  color: ${COLOURS.black};
  float: right;
  padding: 20px, 20px, 20px, 20px;
  margin: 20px, 20px, 20px, 20px;
`;

export const Comment = styled.p`
  font-size: 16px;
  text-align: left;
  padding: 10px, 10px, 10px, 10px;
  margin: 10px, 10px, 10px, 10px;
`;