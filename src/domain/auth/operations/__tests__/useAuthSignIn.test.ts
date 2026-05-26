import { act, renderHook } from "@testing-library/react-native";
import { User } from "../../user";
import { useAuthSignIn } from "../useAuthSignIn";

const mockSignIn = jest.fn();
const mockSaveAuthUser = jest.fn();
const mockSendFeedback = jest.fn();

jest.mock("@/src/infra/repositories/repository-provider", () => ({
  useRepositoryContext: () => {
    return {
      auth: {
        signIn: mockSignIn,
      },
    };
  },
}));

jest.mock("../../auth-context", () => ({
  useAuthContext: () => ({ saveAuthUser: mockSaveAuthUser }),
}));

jest.mock("@/src/infra/feedbackService/feedback-service-provider", () => ({
  useFeedbackServiceContext: () => ({ send: mockSendFeedback }),
}));

describe("useAuthSignIn()", () => {
  it("Should call SaveAuthUser function and Send a success feedback on successful sign in", async () => {
    const user: User = {
      id: "1",
      email: "emanuel@gmail.com",
      fullname: "Emanuel de Brito",
    };

    mockSignIn.mockResolvedValueOnce(user);

    const { result } = renderHook(() => useAuthSignIn());

    await act(async () => {
      await result.current.mutate({
        email: "emanuel@gmail.com",
        password: "123",
      });
    });

    expect(mockSignIn).toHaveBeenCalledWith("emanuel@gmail.com", "123");
    expect(mockSaveAuthUser).toHaveBeenCalledWith(user);
    expect(mockSendFeedback).toHaveBeenCalledWith({
      type: "success",
      message: "Success: " + user.email,
    });
  });
});
