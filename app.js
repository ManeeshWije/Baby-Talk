//76abfd4b-893b-48e4-afbb-c29a85c966a9
$.ajax({
  type: "GET",
  url:
    "https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/umpire?key=76abfd4b-893b-48e4-afbb-c29a85c966a9",
  data: "data",
  dataType: "dataType",
  success: function (data) {
    console.log(data);
  },
});
