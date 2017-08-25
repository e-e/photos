import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
	activeImage: null,
	albums: [
		{
			id: "woujx82",
			title: "so random!!!!!",
			description: "",
			coverIndex: 12,
			images: [
				{
					"id": "XYluj8B",
					"src": "http://i.imgur.com/XYluj8B.jpg",
					"thumb": "http://i.imgur.com/XYluj8Bb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "MsYfsQL",
					"src": "http://i.imgur.com/MsYfsQL.jpg",
					"thumb": "http://i.imgur.com/MsYfsQLb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "QBGRuxg",
					"src": "http://i.imgur.com/QBGRuxg.jpg",
					"thumb": "http://i.imgur.com/QBGRuxgb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "9Oc5yjH",
					"src": "http://i.imgur.com/9Oc5yjH.jpg",
					"thumb": "http://i.imgur.com/9Oc5yjHb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "vLJHgXW",
					"src": "http://i.imgur.com/vLJHgXW.jpg",
					"thumb": "http://i.imgur.com/vLJHgXWb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "wSAcu5o",
					"src": "http://i.imgur.com/wSAcu5o.jpg",
					"thumb": "http://i.imgur.com/wSAcu5ob.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "ENLZYIt",
					"src": "http://i.imgur.com/ENLZYIt.jpg",
					"thumb": "http://i.imgur.com/ENLZYItb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "lFaCJyZ",
					"src": "http://i.imgur.com/lFaCJyZ.jpg",
					"thumb": "http://i.imgur.com/lFaCJyZb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "yZW3VtX",
					"src": "http://i.imgur.com/yZW3VtX.jpg",
					"thumb": "http://i.imgur.com/yZW3VtXb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "t0clOW9",
					"src": "http://i.imgur.com/t0clOW9.jpg",
					"thumb": "http://i.imgur.com/t0clOW9b.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "rmLxOET",
					"src": "http://i.imgur.com/rmLxOET.jpg",
					"thumb": "http://i.imgur.com/rmLxOETb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "Mz8EKq7",
					"src": "http://i.imgur.com/Mz8EKq7.jpg",
					"thumb": "http://i.imgur.com/Mz8EKq7b.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "vs6omnZ",
					"src": "http://i.imgur.com/vs6omnZ.jpg",
					"thumb": "http://i.imgur.com/vs6omnZb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "JEAWKUj",
					"src": "http://i.imgur.com/JEAWKUj.jpg",
					"thumb": "http://i.imgur.com/JEAWKUjb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "s8XLHFE",
					"src": "http://i.imgur.com/s8XLHFE.jpg",
					"thumb": "http://i.imgur.com/s8XLHFEb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "n8w4Xi4",
					"src": "http://i.imgur.com/n8w4Xi4.jpg",
					"thumb": "http://i.imgur.com/n8w4Xi4b.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "foHu09d",
					"src": "http://i.imgur.com/foHu09d.jpg",
					"thumb": "http://i.imgur.com/foHu09db.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "qV2kt5n",
					"src": "http://i.imgur.com/qV2kt5n.jpg",
					"thumb": "http://i.imgur.com/qV2kt5nb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "ShGcQQb",
					"src": "http://i.imgur.com/ShGcQQb.jpg",
					"thumb": "http://i.imgur.com/ShGcQQbb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				},
				{
					"id": "CeDhQLG",
					"src": "http://i.imgur.com/CeDhQLG.jpg",
					"thumb": "http://i.imgur.com/CeDhQLGb.jpg",
					"title": "",
					"description": "",
					"location": "",
					"date": "",
				}
			]
		},
		{
			id: "slkdjs",
			title: "pups",
			description: "just some puppies",
			coverIndex: 8,
			images: [
				{
					"id": "zIZFMaV",
					"src": "http://i.imgur.com/zIZFMaV.jpg",
					"thumb": "http://i.imgur.com/zIZFMaVb.jpg",
					"title": "poke-pup",
					"description": "a pup that wants to be the very best",
					"location": "",
					"date": "",
				},
				{
					"id": "Oa7jCoG",
					"src": "http://i.imgur.com/Oa7jCoG.jpg",
					"thumb": "http://i.imgur.com/Oa7jCoGb.jpg",
					"title": "tubby pup",
					"description": "a tubby pup that has a toy",
					"location": "",
					"date": "",
				},
				{
					"id": "AjT0C1p",
					"src": "http://i.imgur.com/AjT0C1p.jpg",
					"thumb": "http://i.imgur.com/AjT0C1pb.jpg",
					"location": "",
					"date": "",
					"title": "",
					"description": "",
				},
				{
					"id": "GTetGuU",
					"src": "http://i.imgur.com/GTetGuU.jpg",
					"thumb": "http://i.imgur.com/GTetGuUb.jpg",
					"location": "",
					"date": "",
					"title": "",
					"description": "",
				},
				{
					"id": "e3X3mMI",
					"src": "http://i.imgur.com/e3X3mMI.jpg",
					"thumb": "http://i.imgur.com/e3X3mMIb.jpg",
					"location": "",
					"date": "",
					"title": "",
					"description": "",
				},
				{
					"id": "DKthKcX",
					"src": "http://i.imgur.com/DKthKcX.jpg",
					"thumb": "http://i.imgur.com/DKthKcXb.jpg",
					"location": "",
					"date": "",
					"title": "",
					"description": "",
				},
				{
					"id": "y2CWJ0P",
					"src": "http://i.imgur.com/y2CWJ0P.jpg",
					"thumb": "http://i.imgur.com/y2CWJ0Pb.jpg",
					"location": "",
					"date": "",
					"title": "goodnight pup",
					"description": "a pup ready for sleep",
				},
				{
					"id": "rqQZ05m",
					"src": "http://i.imgur.com/rqQZ05m.jpg",
					"thumb": "http://i.imgur.com/rqQZ05mb.jpg",
					"location": "",
					"date": "",
					"title": "goodnight pup",
					"description": "a pup ready for sleep",
				},
				{
					"id": "Fap9ALF",
					"src": "http://i.imgur.com/Fap9ALF.jpg",
					"thumb": "http://i.imgur.com/Fap9ALFb.jpg",
					"location": "",
					"date": "",
					"title": "goodnight pup",
					"description": "a pup ready for sleep",
				}
			]
		},
		{
			id: "slkd34js",
			title: "pups",
			description: "just some puppies",
			coverIndex: 2,
			images: [
				{
					"id": "zIZFMaV",
					"src": "http://i.imgur.com/zIZFMaV.jpg",
					"thumb": "http://i.imgur.com/zIZFMaVb.jpg",
					"title": "poke-pup",
					"description": "a pup that wants to be the very best",
					"location": "",
					"date": "",
				},
				{
					"id": "Oa7jCoG",
					"src": "http://i.imgur.com/Oa7jCoG.jpg",
					"thumb": "http://i.imgur.com/Oa7jCoGb.jpg",
					"title": "tubby pup",
					"description": "a tubby pup that has a toy",
					"location": "",
					"date": "",
				},
				{
					"id": "AjT0C1p",
					"src": "http://i.imgur.com/AjT0C1p.jpg",
					"thumb": "http://i.imgur.com/AjT0C1pb.jpg",
					"location": "",
					"date": "",
					"title": "",
					"description": "",
				},
				{
					"id": "GTetGuU",
					"src": "http://i.imgur.com/GTetGuU.jpg",
					"thumb": "http://i.imgur.com/GTetGuUb.jpg",
					"location": "",
					"date": "",
					"title": "",
					"description": "",
				}
			]
		},
		{
			id: "slkd1124js",
			title: "pups",
			description: "just some puppies",
			coverIndex: 2,
			images: [
				{
					"id": "zIZFMaV",
					"src": "http://i.imgur.com/zIZFMaV.jpg",
					"thumb": "http://i.imgur.com/zIZFMaVb.jpg",
					"title": "poke-pup",
					"description": "a pup that wants to be the very best",
					"location": "",
					"date": "",
				},
				{
					"id": "Oa7jCoG",
					"src": "http://i.imgur.com/Oa7jCoG.jpg",
					"thumb": "http://i.imgur.com/Oa7jCoGb.jpg",
					"title": "tubby pup",
					"description": "a tubby pup that has a toy",
					"location": "",
					"date": "",
				},
				{
					"id": "AjT0C1p",
					"src": "http://i.imgur.com/AjT0C1p.jpg",
					"thumb": "http://i.imgur.com/AjT0C1pb.jpg",
					"location": "",
					"date": "",
					"title": "",
					"description": "",
				},
				{
					"id": "GTetGuU",
					"src": "http://i.imgur.com/GTetGuU.jpg",
					"thumb": "http://i.imgur.com/GTetGuUb.jpg",
					"location": "",
					"date": "",
					"title": "",
					"description": "",
				}
			]
		}
	],
};


const mutations = {

};

const actions = {

};

const getters = {
	getAlbum(state) {

	}
};


export default new Vuex.Store({ state, getters, actions, mutations });