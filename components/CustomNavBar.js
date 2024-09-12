import { Appbar } from "react-native-paper";
import { getHeaderTitle } from '@react-navigation/elements';

export default function CustomNavBar({back, navigation, options, route}) {
    const title = getHeaderTitle(options, route.name);

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} />
            {!back ? <Appbar.Action onPress={() => navigation.navigate('Second')} icon="arrow-right" /> : null}
        </Appbar.Header>
    )
}