import { Box } from "@/src/ui/components/box";
import { Text } from "@/src/ui/components/text";
import { ThemeColors } from "@/src/ui/theme/theme";
import RNToast, { ToastConfig } from "react-native-toast-message";
import { Feedback, FeedbackType } from "../../feedbackServiceInterface";

const toastColors: Record<
  FeedbackType,
  { backgroundColor: ThemeColors; textColor: ThemeColors }
> = {
  success: {
    backgroundColor: "fbSuccessBg",
    textColor: "fbSuccessSurface",
  },
  error: {
    backgroundColor: "fbErrorBg",
    textColor: "fbErrorSurface",
  },
  warning: {
    backgroundColor: "fbWarningBg",
    textColor: "fbWarningSurface",
  },
  info: {
    backgroundColor: "fbInfoBg",
    textColor: "fbInfoSurface",
  },
};

const CustomToast = ({ type, message, description }: Feedback) => {
  const toastColor = toastColors[type ?? "success"];

  return (
    <Box
      alignItems="center"
      minWidth={200}
      paddingVertical="s12"
      paddingHorizontal="s24"
      backgroundColor={toastColor.backgroundColor}
      borderRadius="default"
    >
      <Text variant="title18" color={toastColor.textColor}>
        {message}
      </Text>
      {description && (
        <Text mt="s4" color={toastColor.textColor} textAlign="center">
          {description}
        </Text>
      )}
    </Box>
  );
};

const toastConfig: ToastConfig = {
  success: ({ props }) => <CustomToast {...props} />,
  error: ({ props }) => <CustomToast {...props} />,
  warning: ({ props }) => <CustomToast {...props} />,
  info: ({ props }) => <CustomToast {...props} />,
};

export const Toast = () => {
  return (
    <RNToast
      autoHide
      topOffset={60}
      visibilityTime={2000}
      config={toastConfig}
    />
  );
};
