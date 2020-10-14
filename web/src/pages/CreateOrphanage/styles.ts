import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  flex: 1;
`;

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: var(--background-secondary);
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  label {
    display: flex;
    color: var(--text-tertiary);
    margin-bottom: 8px;
    line-height: 24px;
  }

  .leaflet-container {
    margin-bottom: 4rem;
    border: 1px solid #d3e2e5;
    border-radius: 2rem;
  }

  .input-block {
    & + .input-block {
      margin-top: 24px;
    }

    span {
      font-size: 14px;
      color: var(--text-tertiary);
      margin-left: 24px;
      line-height: 24px;
    }

    input,
    textarea {
      width: 100%;
      border: 1px solid #d3e2e5;
      border-radius: 20px;
      outline: none;
      color: #5c8599;
    }

    input {
      height: 64px;
      padding: 0 16px;
    }

    textarea {
      min-height: 120px;
      max-height: 240px;
      resize: vertical;
      padding: 16px;
      line-height: 28px;
    }

    .images-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 1.6rem;

      img {
        width: 100%;
        height: 9.6rem;
        object-fit: cover;

        border-radius: 2rem;
      }
    }

    .new-image {
      height: 9.6rem;
      background: var(--background-input);
      border: 1px dashed #96d2f0;
      border-radius: 20px;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    input[type="file"] {
      display: none;
    }

    .button-select {
      display: grid;
      grid-template-columns: 1fr 1fr;

      button {
        height: 64px;
        background: var(--background-input);
        border: 1px solid #d3e2e5;
        color: #5c8599;
        cursor: pointer;

        &.active {
          background: var(--background-secondary);
          border: 1px solid #a1e9c5;
          color: #37c77f;
        }

        &:first-child {
          border-radius: 20px 0px 0px 20px;
        }

        &:last-child {
          border-radius: 0 20px 20px 0;
          border-left: 0;
        }
      }
    }
  }

  fieldset {
    border: 0;

    & + fieldset {
      margin-top: 80px;
    }

    legend {
      width: 100%;

      font-size: 32px;
      line-height: 34px;
      color: var(--text-secondary);
      font-weight: 700;

      border-bottom: 1px solid #d3e2e5;
      margin-bottom: 40px;
      padding-bottom: 24px;
    }
  }
`;

export const CofirmButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  svg {
    margin-right: 16px;
  }

  &:hover {
    background: #36cf82;
  }
`;
