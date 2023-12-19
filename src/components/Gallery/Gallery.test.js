import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Gallery from "./Gallery";
import ImageComponent from "../ImageComponent/ImageComponent";
import Modal from "../Modal/Modal";

global.OffscreenCanvas = class {
  constructor() {
    this.getContext = () => ({
      imageSmoothingEnabled: true,
    });
  }
};

describe("Gallery", () => {
  const images = [
    {
      id: "1",
      url: "http://example.com/image1.jpg",
      alt_description: "Image 1",
      user: { username: "User2" },
    },
    {
      id: "2",
      url: "http://example.com/image2.jpg",
      alt_description: "Image 2",
      user: { username: "User2" },
    },
    {
      id: "3",
      url: "http://example.com/image3.jpg",
      alt_description: "Image 3",
      user: { username: "User3" },
    },
    {
      id: "4",
      url: "http://example.com/image4.jpg",
      alt_description: "Image 4",
      user: { username: "User4" },
    },
    {
      id: "5",
      url: "http://example.com/image5.jpg",
      alt_description: "Image 5",
      user: { username: "User5" },
    },
    {
      id: "6",
      url: "http://example.com/image6.jpg",
      alt_description: "Image 6",
      user: { username: "User6" },
    },
    {
      id: "7",
      url: "http://example.com/image7.jpg",
      alt_description: "Image 7",
      user: { username: "User7" },
    },
    {
      id: "8",
      url: "http://example.com/image8.jpg",
      alt_description: "Image 8",
      user: { username: "User8" },
    },
    {
      id: "9",
      url: "http://example.com/image9.jpg",
      alt_description: "Image 9",
      user: { username: "User9" },
    },
    {
      id: "10",
      url: "http://example.com/image10.jpg",
      alt_description: "Image 10",
      user: { username: "User10" },
    },
  ];

  beforeEach(() => {
    ImageComponent.mockClear();
    Modal.mockClear();
  });

  it("renders all images correctly", () => {
    render(<Gallery images={images} />);
    images.forEach((image) => {
      const imgElement = screen.getByAltText(image.alt_description);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute("src", image.url);
    });
  });

  it("opens modal on image click", () => {
    ImageComponent.mockImplementation(({ onClick }) => (
      <div onClick={onClick}>ImageComponent</div>
    ));
    const { getByText } = render(<Gallery images={images} />);
    fireEvent.click(getByText("ImageComponent"));
    expect(Modal).toHaveBeenCalledTimes(1);
  });

  //   it('closes modal on modal close', () => {
  //     ImageComponent.mockImplementation(({ onClick }) => <div onClick={onClick}>ImageComponent</div>);
  //     Modal.mockImplementation(({ onClose }) => <div onClick={onClose}>Modal</div>);
  //     const { getByText } = render(<Gallery images={images} />);
  //     fireEvent.click(getByText('ImageComponent')); // open modal
  //     fireEvent.click(getByText('Modal')); // close modal
  //     expect(Modal).toHaveBeenCalledTimes(1);
  //   });
});
