import { useNewPost } from "@/api/hooks/useNewPost";
import { Button, ButtonText } from "@/common/components/button";
import { Input } from "@/common/components/input";
import { Spacer } from "@/common/components/spacer";
import { vs } from "@/common/utils/scaling";
import { useAppTheme } from "@/hooks/use-app-theme";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyles } from "./styles";

export const NewPostView = () => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  const { mutateAsync: createNewPost, isPending: isCreateNewPostPending } =
    useNewPost();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });
  const onSubmit = async (data: { title: string; body: string }) => {
    try {
      await createNewPost({ ...data, userId: 1 });
      router.back();
    } catch (error) {
      console.error("Error creating new post:", error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <View style={styles.container}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButton}>Go Back</Text>
        </Pressable>
        <Spacer height={vs(16)} />
        <Text style={styles.title}>New post</Text>

        <Spacer height={vs(12)} />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="title"
        />
        {errors.title && (
          <Text style={styles.errorText}>This is required.</Text>
        )}

        <Spacer height={vs(8)} />

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Body"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="body"
        />
        {errors.body && <Text style={styles.errorText}>This is required.</Text>}

        <Spacer height={vs(16)} />
        <Button
          variant="solid"
          onPress={handleSubmit(onSubmit)}
          isLoading={isCreateNewPostPending}
        >
          <ButtonText variant="solid">Submit</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};
