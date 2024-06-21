import { render } from "@testing-library/react";
import App from "./App";
import "intersection-observer";

jest.mock("@mercadopago/sdk-react", () => ({
  initMercadoPago: jest.fn((publicKey) => {
    console.log(publicKey);
  }),
  Wallet: jest.fn(
    ({
      onReady,
      onError,
      onSubmit,
      customization,
      initialization,
      brand,
      locale,
    }) => <div>Mocked Wallet Component</div>
  ),
}));

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
