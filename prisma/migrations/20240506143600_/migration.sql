-- CreateTable
CREATE TABLE "ZipCodeList" (
    "id" TEXT NOT NULL,
    "JIS_Code" TEXT NOT NULL,
    "Old_Postal_Code" TEXT NOT NULL,
    "Postal_Code" TEXT NOT NULL,
    "Prefecture_Name_Kana" TEXT NOT NULL,
    "City_Ward_Town_Village_Name_Kana" TEXT NOT NULL,
    "Area_Name_Kana" TEXT,
    "Prefecture_Name" TEXT NOT NULL,
    "City_Ward_Town_Village_Name" TEXT NOT NULL,
    "Area_Name" TEXT,
    "Indicates_More_Than_One_Postal_Code_for_the_Same_Area" TEXT NOT NULL,
    "Indicates_a_Subarea_with_Numbered_Addresses" TEXT NOT NULL,
    "Indicates_Presence_of_Chome_in_the_Area" TEXT NOT NULL,
    "Indicates_One_Postal_Code_for_Multiple_Areas" TEXT NOT NULL,
    "Update_Display" TEXT NOT NULL,
    "Change_Reason" TEXT NOT NULL,

    CONSTRAINT "ZipCodeList_pkey" PRIMARY KEY ("id")
);
