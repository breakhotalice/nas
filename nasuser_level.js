/*
 Navicat Premium Data Transfer

 Source Server         : 192.168.11.27
 Source Server Type    : MongoDB
 Source Server Version : 30400
 Source Host           : 192.168.11.27:3000
 Source Schema         : tv_main

 Target Server Type    : MongoDB
 Target Server Version : 30400
 File Encoding         : 65001

 Date: 17/01/2022 18:16:16
*/


// ----------------------------
// Collection structure for user_level
// ----------------------------
db.getCollection("user_level").drop();
db.createCollection("user_level");
db.getCollection("user_level").createIndex({
    needLevel: NumberInt("1")
}, {
    name: "needLevel_1"
});

// ----------------------------
// Documents of user_level
// ----------------------------
db.getCollection("user_level").insert([ {
    _id: "61d6cbbd62f39c03af45372a",
    needLevel: NumberInt("0"),
    needExp: NumberLong("0"),
    userLevelType: NumberInt("-1"),
    needShareCount: NumberInt("0"),
    playTime: NumberLong("0"),
    playTimeGetPoints: NumberLong("0"),
    withdrawalPointsLimit: NumberLong("0"),
    everydayPlayLimit: NumberInt("0"),
    everydayDownloadLimit: NumberInt("0"),
    movieSource: [
        "BDZY",
        "VIPBDZY"
    ],
    isShowPreAd: true,
    isShowPlayingAd: true,
    createTime: NumberLong("1641466813919"),
    modifyTime: NumberLong("1642055062507"),
    remark: "游客只支持观看片源功能"
} ]);
db.getCollection("user_level").insert([ {
    _id: "61d6cbbe62f39c03af45372b",
    needLevel: NumberInt("0"),
    needExp: NumberLong("0"),
    userLevelType: NumberInt("0"),
    needShareCount: NumberInt("0"),
    playTime: NumberLong("0"),
    playTimeGetPoints: NumberLong("0"),
    withdrawalPointsLimit: NumberLong("0"),
    everydayPlayLimit: NumberInt("15"),
    everydayDownloadLimit: NumberInt("0"),
    movieSource: [
        "BDZY",
        "VIPBDZY",
        "YQKVIP"
    ],
    isShowPreAd: true,
    isShowPlayingAd: true,
    createTime: NumberLong("1641466814009"),
    modifyTime: NumberLong("1642393282655"),
    remark: "注册会员"
} ]);
db.getCollection("user_level").insert([ {
    _id: "61d6cbbe62f39c03af45372c",
    needLevel: NumberInt("1"),
    needExp: NumberLong("0"),
    userLevelType: NumberInt("1"),
    needShareCount: NumberInt("1"),
    playTime: NumberLong("30"),
    playTimeGetPoints: NumberLong("10"),
    withdrawalPointsLimit: NumberLong("0"),
    everydayPlayLimit: NumberInt("25"),
    everydayDownloadLimit: NumberInt("0"),
    movieSource: [
        "BDZY",
        "VIPBDZY",
        "YQKVIP"
    ],
    isShowPreAd: true,
    isShowPlayingAd: true,
    createTime: NumberLong("1641466814013"),
    modifyTime: NumberLong("1642406777270"),
    remark: "推广%s人"
} ]);
db.getCollection("user_level").insert([ {
    _id: "61d6cbbe62f39c03af45372d",
    needLevel: NumberInt("2"),
    needExp: NumberLong("0"),
    userLevelType: NumberInt("1"),
    needShareCount: NumberInt("2"),
    playTime: NumberLong("30"),
    playTimeGetPoints: NumberLong("15"),
    withdrawalPointsLimit: NumberLong("0"),
    everydayPlayLimit: NumberInt("50"),
    everydayDownloadLimit: NumberInt("0"),
    movieSource: [
        "BDZY",
        "VIPBDZY",
        "YQKVIP"
    ],
    isShowPreAd: true,
    isShowPlayingAd: true,
    createTime: NumberLong("1641466814016"),
    modifyTime: NumberLong("1642406817884"),
    remark: "推广%s人"
} ]);
db.getCollection("user_level").insert([ {
    _id: "61d6cbbe62f39c03af45372e",
    needLevel: NumberInt("3"),
    needExp: NumberLong("0"),
    userLevelType: NumberInt("1"),
    needShareCount: NumberInt("5"),
    playTime: NumberLong("30"),
    playTimeGetPoints: NumberLong("20"),
    withdrawalPointsLimit: NumberLong("0"),
    everydayPlayLimit: NumberInt("100"),
    everydayDownloadLimit: NumberInt("0"),
    movieSource: [
        "BDZY",
        "VIPBDZY",
        "YQKVIP"
    ],
    isShowPreAd: true,
    isShowPlayingAd: true,
    createTime: NumberLong("1641466814020"),
    modifyTime: NumberLong("1642406840273"),
    remark: "推广%s人"
} ]);
db.getCollection("user_level").insert([ {
    _id: "61d6cbbe62f39c03af45372f",
    needLevel: NumberInt("4"),
    needExp: NumberLong("0"),
    userLevelType: NumberInt("1"),
    needShareCount: NumberInt("10"),
    playTime: NumberLong("30"),
    playTimeGetPoints: NumberLong("30"),
    withdrawalPointsLimit: NumberLong("0"),
    everydayPlayLimit: NumberInt("200"),
    everydayDownloadLimit: NumberInt("0"),
    movieSource: [
        "BDZY",
        "VIPBDZY",
        "YQKVIP"
    ],
    isShowPreAd: true,
    isShowPlayingAd: true,
    createTime: NumberLong("1641466814024"),
    modifyTime: NumberLong("1642406855370"),
    remark: "推广%s人"
} ]);
db.getCollection("user_level").insert([ {
    _id: "61d6cbbe62f39c03af453730",
    needLevel: NumberInt("5"),
    needExp: NumberLong("0"),
    userLevelType: NumberInt("1"),
    needShareCount: NumberInt("20"),
    playTime: NumberLong("30"),
    playTimeGetPoints: NumberLong("50"),
    withdrawalPointsLimit: NumberLong("0"),
    everydayPlayLimit: NumberInt("300"),
    everydayDownloadLimit: NumberInt("0"),
    movieSource: [
        "BDZY",
        "VIPBDZY",
        "YQKVIP"
    ],
    isShowPreAd: true,
    isShowPlayingAd: true,
    createTime: NumberLong("1641466814028"),
    modifyTime: NumberLong("1642406917959"),
    remark: "推广%s人"
} ]);
