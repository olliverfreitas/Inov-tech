import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Map, { Callout, Marker } from "react-native-maps";
import {Tabs} from 'expo-router'
import { MaterialIcons } from "@expo/vector-icons"; // Para ícones

const locations = [
  {
    latitude: -3.107761738875153,  
    longitude: -60.01482170859854,
    title: "Aline Araújo - CRP 20/12625",
    address: "Rua Salvador, 120 - 12º Andar, Manaus",
  },
  {
    latitude: -3.112663023715354,
    longitude: -60.01983514503134,
    title: "Dra. Raquel Navarro - CRP 20/01209",
    address: "Shalom Office - Rua Professor Marciano Armond, 929",  
  },
  {
    latitude: -3.108013061885875,
    longitude: -60.01248846222841,  
    title: "Francisco Augusto Barroso da Costa Lima Filho - CRP 20/10873",
    address: "Rua Salvador 440 - Sala 903 - Edifício Sob",
  },
  {
    latitude: -3.0845250044724994,
    longitude: -60.069164962228534, 
    title: "Juliana Brito - CRP 05/35727",
    address: "Av. Coronel Teixeira 6225",
  },
  {
    latitude: -3.0877731051896293,
    longitude: -59.99701233524505,  
    title: "Silvia Salgado - CRP - 20/02061",
    address: "Av. Efigênio Sales, 2240 - Cond. Mundi Res",
  },
  {
    latitude: -3.106973287823952,
    longitude: -60.01960461990059,
    title: "Andreia Costa - CRP 20/03226",
    address: "Avenida João Valério 753, Manaus",
  },
  {
    latitude: -3.1039084349516464,  
    longitude: -60.010303833392264,
    title: "Clayton Oliveira - CRP 20/07131",
    address: "Clinica Dr Bernardo Medeiros Avenida Umberto Calderado Filho",
  },
  {
    latitude: -3.0491646740987086, 
    longitude: -60.01406879106477,
    title: "Prof. Fernando Cércena Leventi - CRP 14/04702-1",
    address: "Rua Sargento Francisco Amandio 82, Manaus",
  },
  {
    latitude: -3.102071169017977,
    longitude: -60.02383611990062,  
    title: "Dra. Klicia Batalha - CRP 20/09692",
    address: "Avenida Djalma Batista, 1530 - sala 14A",
  },
  {
    latitude: -3.107787861844953,  
    longitude: -60.01481416222841,
    title: "Elca Coimbra de Oliveira - CRP 23/1116",
    address: "Rua Salvador 120 - Edificio Vieiralves Busin",
  },
  {
    latitude: -3.099847412947181,
    longitude: -60.02020207572009,
    title: "Dr. Rockson Pessoa - 20/03665",
    address: "Av. Rio Madeira, 1093 - Nossa Sra. das Gra",
  },
  {
    latitude: -3.1024834477729604,
    longitude: -60.02150877757274,
    title: "Ícaro Castro - CRP 20/06198",
    address: "Av. Rio Jutaí, n 726 - 1º andar",
  },
  {
    latitude: -3.0970006467236133,
    longitude: -60.00993859106453,
    title: "Carla Dimaraes - CRP 01308",
    address: "Av. Umberto Calderaro Filho, 1169",
  },
  {
    latitude: -3.115262876184232,
    longitude: -60.008887219900586,
    title: "Raul Menezes - CRP 20/04730",
    address: "Rua Professor Marciano Armond, 929",
  },
  {
    latitude: -3.101279960663519,
    longitude: -60.02527592783427,  
    title: "Kassia Amorim - CRP 20/05002",
    address: "Millennium Medical Tower, 1661 - Chapada, Manaus",
  },
  {
    latitude: -3.115207302134516,
    longitude: -60.00881681804793,  
    title: "Bruno Melo - CRP 20/08395",
    address: "Rua Professor Marciano Armond, Manaus, Shalom Virtual Office",
  },
  {
    latitude: -3.107713870443099,
    longitude: -60.01477931804794,
    title: "Camila Lima - CRO 03313",  
    address: "Av. R. Salvador, 120 - 12º andar",
  },
  {
    latitude: -3.105714783013362,
    longitude: -60.02371329291711,  
    title: "Socorro Souza - CRP 20/00905",
    address: "Rua Rio Ituxi 62",
  },
  {
    latitude: -3.0927756987453754,
    longitude: -60.041093718048025,
    title: "Dr. Sebastião Nascimento - CRP 20/08390",
    address: "Rua dos Angelins 6 Conjunto Kíssia, Manaus",
  },

  {
    latitude: -3.100903094971853,  
    longitude: -60.00573749106448,
    title: "Valéria Abreu - CRP 20/07408",
    address: "Rua Belo Horizonte, 1160 (1º andar)",
  },
  {
    latitude: -3.1076700182106682,
    longitude: -60.01482489106455,
    title: "Paulo Victor Miranda Moreira - CRP 12904",
    address: "Edifício Vieiralves Business Center - R. Salvador, 120 - 12º Andar",
  },
  {
    latitude: -3.100903094971853,  
    longitude: -60.00573749106448,
    title: "Débora Rosa - 20/11219",
    address: "Rua Belo Horizonte, 1160 (1º andar)",
  },
  {
    latitude: -3.0989272310926452,
    longitude: -60.020190603608555,  
    title: "Dr. Daniel Pinheiro - 20/01377",
    address: "Av. Rio Madeira, 1225 - Sala 11 - Conj. Vieiralves - Nossa Sra. das Graças, 69053030",
  },
  {
    latitude: -3.1074958923781537,
    longitude: -60.02349938921173,
    title: "Dra. Conceição Barbosa - 20/1759",
    address: "Avenida Djalma Batista 946, Manaus",
  },
  {
    latitude: -3.1357416541780005,
    longitude: -60.024290204556024,
    title: "Adalberto Silva - CRP 03/23371",
    address: "Rua Marechal Deodoro, Manaus",
  },
  {
    latitude: -3.1299122530503927,
    longitude: -60.00427091990038,
    title: "Dra. Ozilene Duarte de Lima dos Santos - CRP 20/04615",
    address: "Av. Santa Isabel, 1043, Manaus",
  },
  {
    latitude: -3.0955272200836674,
    longitude: -59.99104754688415,
    title: "Marinágila Marinho de Lima - CRP 20/09609",
    address: "Avenida da Lua, 01 - Aleixo, Manaus",
  },
  {
    latitude: -3.107808287958713,  
    longitude: -60.014802433392276,
    title: "Alana Fernandes - CRP 20/12890",
    address: "R. Salvador, 120, Manaus",
  },
  {
    latitude: -3.10578016608764,
    longitude: -60.01737624873673, 
    title: "Mirela Frithz - CRP 20/08953",
    address: "Rua Acre número 12, Manaus",
  },
  {
    latitude: -3.1078725662979063,
    longitude: -60.01484534873667,  
    title: "Dra. Fernanda Manuela Amaral - CRP 20/12610",
    address: "R. Salvador, 120, Manaus",
  },
  {
    latitude: -3.107837135744885,
    longitude: -60.012401291064606,  
    title: "Dr. Everaldo Castellani - CRP 11/10049",
    address: "Soberane mall - Rua Salvador 440, Manaus",
  },
  {
    latitude: -3.089511345293292,
    longitude: -60.01888506408107,  
    title: "Izabelle Rosas Magalhães Rocha - CRP 20/07084",
    address: "R. Vanessa Marques, 19",
  },
  {
    latitude: -3.1009995131093873,  
    longitude: -60.005769677572765,
    title: "Ana Paula Nunes de Farias - 20/13057",
    address: "Rua Belo Horizonte, 1160 (1º andar)",
  },
  {
    latitude: -3.099793847257956,  
    longitude: -60.02021280455622,
    title: "Dra. Fabiana Furlan - CRP 20/10979",
    address: "Rua Rio Madeira, 1093 - Nossa Sra das Gra",
  },
  {
    latitude: -3.1075709616502567,  
    longitude: -60.0195023560112,
    title: "Dra. Udenize Pessoa - CRP 20/07302",
    address: "Rua RIO JURUÁ, 265, Vieiralves, Manaus",
  },
  {
    latitude: -3.0849495842823353,
    longitude: -60.06876703524494,  
    title: "Ana Cordovil - CRP 20/04663",
    address: "Britannia Park Offices, Avenida Coronel Tei",
  },
  {
    latitude: -3.1078628532417474,
    longitude: -60.01485707757283,
    title: "Julita Nascimento Camara de Castro - CRP 20/08433",
    address: "Rua Salvador, N. 120, Edifício Vieiralves Bu",
  },
  {
    latitude: -3.107945622713564,  
    longitude: -60.012391535244966,
    title: "Janaína Dias - CRP 20/08613",
    address: "Rua Salvador 440 - Edifício Soberane Live",
  },
  {
    latitude: -3.100956660604896,
    longitude: -60.0057053045562,  
    title: "Taize Andrade dos Santos Portela - CRP 20/03111",
    address: "Rua Belo Horizonte, 1160 (1º andar) - Adria",
  },
  {
    latitude: -3.1057269614705536,
    longitude: -60.01725037572019,  
    title: "Dr. Eudel Fabio Sena Paulino - CRP 20/1408",
    address: "Rua Acre, nº 12, ED CEMOM, 4º Andar",
  },
  {
    latitude: -3.124183342163752,
    longitude: -60.0227083180478,
    title: "Irismar De Farias - CRP 20/08237",
    address: "Rua Tapajos 639, Manaus",
  },
  {
    latitude: -3.101177086889391,
    longitude: -60.02431759529286,
    title: "Dra. Nália de Paula Oliveira - CRP 00922",
    address: "Av. Djalma Batista, 1661, Edf Millenium Torr",
  },
  {
    latitude: -3.108044761891644,  
    longitude: -60.012336062228535,
    title: "Laimara Oliveira da Fonseca - CRP 20/11357",
    address: "R. Salvador, 440, Sala 701, Adrianópolis",
  },
  {
    latitude: -3.1062133269157406,
    longitude: -60.02523657757273,  
    title: "Prof. Mavie Frazão - CRP 03235",
    address: "Av. João Valério, 123 - São Geraldo, Manaus",
  },
  {
    latitude: -3.1164695412279846,  
    longitude: -60.01662504873651,
    title: "Dayana De Abrahim - 60247/05",
    address: "Rua Major Gabriel 2020, Manaus",
  },
  {
    latitude: -3.099847412947181,  
    longitude: -60.020244991064494,
    title: "Karine Ramos - CRP 20/1552",
    address: "Rio Madeira, 1093, Nossa Senhora das Graças",
  },
  {
    latitude: -3.099847412947181,  
    longitude: -60.020244991064494,
    title: "Tallyne Silva - CRP 20/08899",
    address: "Rua Rio Madeira, n1093 - Nossa Senhora das Graças",
  },
  {
    latitude: -3.0718222687651053,
    longitude: -60.04457510455639,  
    title: "Belquice Manso - CRP 01810",
    address: "AV. DESEMBARGADOR JOÃO MACHADO",
  },
  {
    latitude: -3.0722540090805794,  
    longitude: -60.049112889211926,
    title: "Andressa Guerreiro Pereira - CRP 20/05252",
    address: "Avenida Desembargador, 651, Alvorada",
  },
  {
    latitude: -3.1037392825344727,
    longitude: -60.02027728735912,  
    title: "Luenda Lira de Freitas - CRP 20/10197",
    address: "Avenida Rio Madeira, Manaus",
  },
  {
    latitude: -3.1060563246031236,
    longitude: -60.01268942386749,  
    title: "Gleyce Costa da Silva - CRP 20/10347",
    address: "Edifício The Place Business Center. R. Belo Horizonte",
  },
  {
    latitude: -3.135773792493517,  
    longitude: -60.024311662228214,
    title: "Delta Cristina Caetano Medeiros Mossa - CRP 72192",
    address: "Rua Marechal Deodoro, Manaus",
  },
];


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

        <Tabs.Screen options={{
                headerTitle: 'ATIVIDADES',
                headerStyle: {backgroundColor: '#67D0A9'}
            }} />

      {/* Espaço para outras opções */}

      {/* Mapa */}
      <View style={styles.mapContainer}>
        <Map
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: -3.087983186917395,
            longitude: -59.996927706755876,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
               pinColor='#03BB85'
            >
              <Callout style={styles.callout}>
                <View>
                  <Text style={styles.title}>{location.title}</Text>
                  <Text style={styles.address}>{location.address}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </Map>
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  chatIcon: {
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 10,
  },
  circleIcon: {
    backgroundColor: "#ff6347", // Cor de fundo para a bola
    borderRadius: 50,
    padding: 10,
    position: "absolute",
    right: 10,
    top: 10,
  },
  mapContainer: {
    flex: 1, // Ocupa o espaço entre as opções e os atalhos
  },
  shortcutsContainer: {
    height: "15%", // Ajusta a altura da parte inferior para atalhos
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Cor de fundo para destaque
  },
  callout: {
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  address: {
    fontSize: 14,
  },
  icon: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 2, // Sombra para destaque
  },
});