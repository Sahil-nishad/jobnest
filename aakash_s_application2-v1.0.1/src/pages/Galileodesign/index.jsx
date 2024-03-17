import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Img, List, Text } from "components";

const GalileodesignPage = () => {
  const sideBarMenu = [
    { label: "Courses" },
    { label: "Projects" },
    { label: "Clients" },
    { label: "Mentors" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-50 flex flex-col h-[800px] md:h-auto items-start justify-start max-w-7xl w-full">
          <div className="flex flex-col h-[800px] md:h-auto items-start justify-start max-w-7xl w-full">
            <div className="flex md:flex-col flex-row gap-1 h-[800px] md:h-auto items-start justify-center max-w-7xl sm:px-5 px-6 py-5 w-full">
              <Sidebar className="!sticky !w-[307px] bg-gray-50 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
                <div className="flex flex-col h-[37px] md:h-auto items-center justify-start mt-4 mx-auto px-3 py-2 w-[275px]">
                  <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-10">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtLexendMedium14"
                      >
                        Home
                      </Text>
                    </div>
                  </div>
                </div>
                <Menu
                  menuItemStyles={{
                    button: {
                      padding: "7px",
                      flexDirection: "column",
                      marginTop: "8px",
                      color: "#0c111c",
                      fontWeight: 500,
                      fontSize: "14px",
                      borderRadius: "12px",
                      [`&:hover, &.ps-active`]: {
                        backgroundColor: "#e8eaf2ff !important",
                      },
                    },
                  }}
                  className="flex flex-col items-center justify-start mt-[7px] px-4 w-[90%]"
                >
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </Menu>
                <div className="flex flex-col h-14 md:h-auto items-start justify-start mb-4 mt-[471px] mx-auto w-[275px]">
                  <div className="bg-blue-A700 flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[12px] w-[275px]">
                    <div className="bg-blue-A700 flex flex-col h-[21px] md:h-auto items-start justify-start w-[88px]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-50 text-sm tracking-[0.21px] w-auto"
                          size="txtLexendBold14"
                        >
                          New Project
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Sidebar>
              <div className="flex flex-1 flex-col h-[760px] md:h-auto items-start justify-start max-w-[921px] md:px-5 w-full">
                <div className="flex flex-col items-start justify-start p-4 w-full">
                  <div className="flex flex-col h-10 md:h-auto items-start justify-start w-72">
                    <div className="flex flex-col h-10 md:h-auto items-start justify-start w-72">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 tracking-[-0.80px] w-auto"
                          size="txtLexendBold32"
                        >
                          Projects
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray-50 flex flex-1 md:flex-col flex-row gap-4 items-start justify-evenly p-2.5 w-full">
                    <div className="flex flex-1 md:flex-col flex-row gap-4 h-[88px] md:h-auto items-start justify-start max-w-[806px] w-full">
                      <Img
                        className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                        src="images/img_depth6frame0.png"
                        alt="depth6frameZero"
                      />
                      <div className="flex flex-1 flex-col h-[88px] md:h-auto items-start justify-center max-w-[718px] w-full">
                        <div className="flex flex-col h-6 md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-900 w-auto"
                              size="txtLexendMedium16"
                            >
                              Google Calendar Redesign
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-[21px] md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-600 text-sm w-auto"
                              size="txtLexendRegular14"
                            >
                              Feb 4, 2023
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-[43px] md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-600 text-sm w-auto"
                              size="txtLexendRegular14"
                            >
                              This project is a redesign of the Google Calendar
                              web app. The goal is to make it easier for users
                              to find the information they need and to create
                              events.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[66px]">
                      <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[66px]">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtLexendRegular16"
                        >
                          Project 1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex flex-1 md:flex-col flex-row gap-4 items-start justify-evenly p-2.5 w-full">
                    <div className="flex flex-1 md:flex-col flex-row gap-4 h-[88px] md:h-auto items-start justify-start max-w-[806px] w-full">
                      <Img
                        className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                        src="images/img_depth6frame0_72x72.png"
                        alt="depth6frameZero"
                      />
                      <div className="flex flex-1 flex-col h-[88px] md:h-auto items-start justify-center max-w-[718px] w-full">
                        <div className="flex flex-col h-6 md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-900 w-auto"
                              size="txtLexendMedium16"
                            >
                              Google Calendar Redesign
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-[21px] md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-600 text-sm w-auto"
                              size="txtLexendRegular14"
                            >
                              Feb 4, 2023
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-[43px] md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-600 text-sm w-auto"
                              size="txtLexendRegular14"
                            >
                              This project is a redesign of the Google Calendar
                              web app. The goal is to make it easier for users
                              to find the information they need and to create
                              events.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[66px]">
                      <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[66px]">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtLexendRegular16"
                        >
                          Project 1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex flex-1 md:flex-col flex-row gap-4 items-start justify-evenly p-2.5 w-full">
                    <div className="flex flex-1 md:flex-col flex-row gap-4 h-[88px] md:h-auto items-start justify-start max-w-[806px] w-full">
                      <Img
                        className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                        src="images/img_depth6frame0_1.png"
                        alt="depth6frameZero"
                      />
                      <div className="flex flex-1 flex-col h-[88px] md:h-auto items-start justify-center max-w-[718px] w-full">
                        <div className="flex flex-col h-6 md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-900 w-auto"
                              size="txtLexendMedium16"
                            >
                              Google Calendar Redesign
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-[21px] md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-600 text-sm w-auto"
                              size="txtLexendRegular14"
                            >
                              Feb 4, 2023
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-[43px] md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-600 text-sm w-auto"
                              size="txtLexendRegular14"
                            >
                              This project is a redesign of the Google Calendar
                              web app. The goal is to make it easier for users
                              to find the information they need and to create
                              events.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[66px]">
                      <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[66px]">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtLexendRegular16"
                        >
                          Project 1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex flex-1 md:flex-col flex-row gap-4 items-start justify-evenly p-2.5 w-full">
                    <div className="flex flex-1 md:flex-col flex-row gap-4 h-[88px] md:h-auto items-start justify-start max-w-[806px] w-full">
                      <Img
                        className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                        src="images/img_depth6frame0_2.png"
                        alt="depth6frameZero"
                      />
                      <div className="flex flex-1 flex-col h-[88px] md:h-auto items-start justify-center max-w-[718px] w-full">
                        <div className="flex flex-col h-6 md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-900 w-auto"
                              size="txtLexendMedium16"
                            >
                              Google Calendar Redesign
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-[21px] md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-600 text-sm w-auto"
                              size="txtLexendRegular14"
                            >
                              Feb 4, 2023
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-[43px] md:h-auto items-start justify-start max-w-[718px] w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-600 text-sm w-auto"
                              size="txtLexendRegular14"
                            >
                              This project is a redesign of the Google Calendar
                              web app. The goal is to make it easier for users
                              to find the information they need and to create
                              events.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[66px]">
                      <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[66px]">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtLexendRegular16"
                        >
                          Project 1
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row h-[72px] md:h-auto items-center justify-center max-w-[921px] p-4 w-full">
                  <Img
                    className="h-10 w-10"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                  <div className="bg-indigo-50 flex flex-col h-10 md:h-auto items-center justify-center rounded-[50%] w-10">
                    <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-2">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm tracking-[0.21px] w-auto"
                          size="txtLexendBold14Gray900"
                        >
                          1
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center w-10">
                    <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[7px]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtLexendRegular14Gray900"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center w-10">
                    <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[7px]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtLexendRegular14Gray900"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center w-10">
                    <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-2">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtLexendRegular14Gray900"
                        >
                          4
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center w-10">
                    <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[7px]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtLexendRegular14Gray900"
                        >
                          5
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center w-10">
                    <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[7px]">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtLexendRegular14Gray900"
                        >
                          6
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-10 w-10"
                    src="images/img_arrowright_gray_900.svg"
                    alt="arrowright_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalileodesignPage;
