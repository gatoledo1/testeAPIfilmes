import React from "react";
import { View, Text, Image } from "react-native";

interface itemComponent {
    titulo: string;
    ano: string;
    tipo: string;
    poster: string;
}

const Component: React.FC<itemComponent> = ({ titulo, ano, tipo, poster }) => {

    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 20, borderRadius: 12, elevation: 5 }}>
            <Image source={{ uri: poster }} style={{ height: 200, width: 130, borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }} />

            <View style={{ justifyContent: 'center', width: 200, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 18, paddingBottom: 10 }}>
                    {titulo}
                </Text>
                <Text>
                    {ano}
                </Text>
                <Text>
                    {tipo}
                </Text>
            </View>

        </View >
    );

}

export default Component;