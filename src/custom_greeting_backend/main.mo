import HashMap "mo:base/HashMap";

import Text "mo:base/Text";
import Error "mo:base/Error";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Nat "mo:base/Nat";

actor {
  type CourseData={
    tagName:Text;
    courseImg:Text;
    disc:Text;
    date:Text;
    duration:Text;
    videoLink:Text;
    profile:Text;
    insName:Text;
  };
  
  var map = HashMap.HashMap<Text,CourseData >(0, Text.equal, Text.hash);
  
  stable var arrayOfMap : [(Text, CourseData)] = [];

  stable var courseId:Nat=0;

  stable var id:Text = Nat.toText(courseId);
  
  public func insertData(info:CourseData) : async Text{
    let userInfo:CourseData={
    tagName = info.tagName;
    courseImg = info.courseImg;
    disc = info.disc;
    date = info.date;
    duration = info.duration;
    videoLink = info.videoLink;
    profile = info.profile;
    insName = info.insName;
    };
    
    courseId +=1;
    id:= Nat.toText(courseId);
    map.put(id,userInfo);
    return "Data Inserted Successfully";
  };

  public query func fetch(id:Text) : async CourseData {
    
    let data:CourseData = switch(map.get(id)) {
      case(?value) {value };
      case(null) {throw Error.reject("No Data Fount") };
    };

    return data;
  };

  
  public query func getAll() : async [(Text,CourseData)] {
    let allData = Iter.toArray(map.entries());
    return allData;
};


  public func del(id : Text) : async Text {
    
    map.delete(id);

    return "Data Deleted!";
  };




// For Creating Stable HashMap to store data;

  system func preupgrade() {
        arrayOfMap := Iter.toArray(map.entries());
    };

  system func postupgrade() {
        map := HashMap.fromIter<Text, CourseData>(arrayOfMap.vals(), 0, Text.equal, Text.hash);
        arrayOfMap := [];
    };
};