import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Importa os ícones do Expo
import Author from './Author';
import Comments from './Comments';

class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />

                {/* O nome Ferrari agora está logo acima do @ferra_ca */}
                <Text style={styles.ferrariNickname}>Ferrari</Text>

                {/* @ferra_ca logo abaixo de Ferrari */}
                <Text style={styles.username}>@ferra_ca</Text>

                {/* Icone antes de "Founded by:" */}
                <View style={styles.foundedByContainer}>
                    <Image source={require('../../assets/imgs/frame1.png')} style={styles.icon} />
                    <Text style={styles.oliver}>
                        <Text style={styles.foundedBy}>Founded by: </Text>
                        oliver_9 and 4 others
                    </Text>
                </View>

                {/* Componente de Comentários */}
                {/* <Comments comments={this.props.comments} /> */}

                <View style={styles.revenue}>
                    <Text style={styles.texto}>
                        A Ferrari é sinônimo de luxo e performance, criando veículos que iunem design sofisticado e tecnologia de ponta.
                    </Text>
                </View>

                {/* O texto @teste agora aparece após o componente de comentários */}
                <View style={styles.revenue}>
                    <Image source={require('../../assets/imgs/frame2.png')} style={styles.icon} />
                    <Text style={styles.oliver}>
                        10M revenue in one year.
                    </Text>
                </View>
                <Text style={styles.username}>https//:Justliving.com</Text>

                <View style={styles.foundedByContainer2}>
                    <Image source={require('../../assets/imgs/frame1.png')} style={styles.icon} />
                    <Text style={styles.oliver}>
                        <Text >Founded by: </Text>
                        oliver_9 and 4 others
                    </Text>
                </View>

                <Text style={styles.posts}>
                    <Text style={styles.bold}>34</Text> Posts{' '}
                    <Text style={styles.bold}>100k</Text> Followers{' '}
                    <Text style={styles.bold}>1k|23</Text> Following
                </Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followButtonText}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.messageButton}>
                        <Text style={styles.messageButtonText}>Message</Text>
                    </TouchableOpacity>
                </View>




            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Isso garante que o conteúdo ocupe todo o espaço disponível
        flexDirection: 'column', // Garante que os elementos fiquem empilhados verticalmente
        paddingBottom: 20,  // Adiciona um pequeno espaçamento na parte inferior
    },
    ferrariNickname: {
        color: '#444',
        marginVertical: 5,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain',
        top: '1%',
    },
    username: {
        color: '#4B39EF',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: -0.02,
        marginTop: 2, // Reduzido para aproximar do revenue
        marginLeft: 10,
    },
    oliver: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
        color: '#14181B',
    },
    posts: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '300', // Peso ajustado para 300
        fontSize: 13, // Tamanho ajustado para 13px
        lineHeight: 13, // Line height ajustado para 100% do tamanho da fonte
        letterSpacing: -0.02 * 13, // Letter spacing de -2%
        color: '#14181B',
        marginTop: 20,
        marginLeft: 10, // Margem à esquerda reduzida
        marginRight: 10,
    },

    foundedBy: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    foundedByContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    foundedByContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
    },
    icon: {
        width: 16,
        height: 16,
        marginRight: 5,
        marginLeft: 10,
    },
    revenue: {
        flexDirection: 'row', // Para alinhar a imagem e o texto na mesma linha
        alignItems: 'center', // Alinha verticalmente a imagem e o texto
        marginTop: 10,  // Reduzido para ajustar a distância entre os elementos
        marginBottom: 2, // Espaço entre os elementos

    },
    texto: {
        fontFamily: 'Inter',
        fontSize: 14, // Reduziu o tamanho da fonte
        lineHeight: 20, // Diminuído o espaçamento entre as linhas
        color: '#14181B',
        textAlign: 'justify',
        marginVertical: 2, // Reduzido o espaço acima e abaixo do texto
        marginLeft: 10, // Margem à esquerda reduzida
        marginRight: 10,
    },
    bold: {
        fontWeight: 'bold', // Deixa o texto em negrito
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 20,
    },

    followButton: {
        backgroundColor: '#14181B', // Cor para "Follow"
        width: 167,
        height: 36,
        borderRadius: 6,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    followButtonText: {
        color: '#FFFFFF', // Texto branco para contraste
        fontSize: 14,
        fontWeight: 'bold',
    },

    messageButton: {
        backgroundColor: '#F7F7F7', // Cor diferente para "Message"
        width: 167,
        height: 36,
        borderRadius: 6,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    messageButtonText: {
        color: 'black', // Texto branco para contraste
        fontSize: 14,
        fontWeight: 'bold',
    },




});

export default Post;
