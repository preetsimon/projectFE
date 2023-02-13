import React from "react";

import { Img, Text, SelectBox, List, Switch, Button, Radio } from "components";

const SmartHomePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-mulish items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gray_50 flex flex-col items-center justify-end pl-[14px] pt-[14px] w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[1426px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                <Img
                  src="images/img_nav.svg"
                  className="h-[996px] mb-[14px] w-[auto]"
                  alt="nav"
                />
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[35px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[107px] md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-start justify-start p-[25px] sm:px-[20px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group.svg')",
                        }}
                      >
                        <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[52%]">
                          <Text
                            className="font-poppins text-left text-orange_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls11571428775787354 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            Hello, Scarlett!
                          </Text>
                          <Text
                            className="font-mulish font-normal leading-[22.00px] mt-[12px] not-italic text-deep_orange_900 text-left tracking-ls05983337759971619 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            as="h6"
                            variant="h6"
                          >
                            Welcome Home! The air quality is good & fresh you
                            can go out today.
                          </Text>
                          <div className="flex flex-row font-mulish items-start justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[72%]">
                            <Img
                              src="images/img_lock.svg"
                              className="h-[23px] mt-[3px] w-[auto]"
                              alt="lock"
                            />
                            <div className="flex flex-row font-lato items-start justify-center ml-[17px] w-[27%]">
                              <Text
                                className="font-medium text-gray_900 text-left tracking-ls00001714286336209625 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                +25
                              </Text>
                              <div className="border border-gray_900 border-solid h-[5px] ml-[2px] mt-[5px] rounded-radius2 w-[5px]"></div>
                              <Text
                                className="font-medium ml-[2px] text-gray_900 text-left tracking-ls00001714286336209625 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                C
                              </Text>
                            </div>
                            <Text
                              className="font-semibold ml-[8px] mt-[6px] text-gray_900 text-left tracking-ls05983337759971619 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Outdoor temperature
                            </Text>
                          </div>
                          <div className="flex flex-row font-mulish gap-[9px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[52%]">
                            <Img
                              src="images/img_path.svg"
                              className="h-[16px] w-[auto]"
                              alt="Path"
                            />
                            <Text
                              className="font-semibold text-gray_900 text-left tracking-ls05983337759971619 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Fuzzy cloudy weather
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                      <Text
                        className="font-bold sm:mt-[0] mt-[2px] text-gray_900 text-left md:tracking-ls1 sm:tracking-ls1 tracking-ls10257149934768677 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Scarlett’s Home
                      </Text>
                      <div className="flex sm:flex-1 flex-row gap-[31px] items-center justify-between sm:w-[100%] w-[auto]">
                        <div className="flex flex-row font-lato gap-[29px] items-start justify-between w-[auto]">
                          <div className="flex flex-col items-center justify-start w-[auto]">
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Img
                                src="images/img_upload.svg"
                                className="h-[18px] w-[auto]"
                                alt="upload"
                              />
                              <Text
                                className="text-gray_900 text-left tracking-ls000010774980910355225 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                35%
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[auto]">
                            <div className="flex flex-row gap-[7px] items-start justify-between w-[100%]">
                              <Img
                                src="images/img_settings.svg"
                                className="h-[17px] w-[auto]"
                                alt="settings"
                              />
                              <div className="flex flex-row items-start justify-start w-[auto]">
                                <Text
                                  className="h-[18px] text-gray_900 text-left tracking-ls000010774980910355225 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  15
                                </Text>
                                <div className="border border-gray_900 border-solid h-[2px] mt-[2px] rounded-radius50 w-[2px]"></div>
                                <Text
                                  className="text-gray_900 text-left tracking-ls000010774980910355225 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  C
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <SelectBox
                          className="font-mulish font-semibold text-[14px] text-gray_900 text-left tracking-ls014000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          placeholderClassName="text-gray_900"
                          name="Group8Copy"
                          placeholder="Living Room"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[8px] mr-[14px] w-[12px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[20px] w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A700 border hover:border-0 border-indigo_50_ce border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[6px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                        <div className="flex flex-col gap-[11px] items-start justify-start my-[16px] pl-[11px] md:w-[100%] sm:w-[100%] w-[91%]">
                          <div className="flex flex-row gap-[76px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[98%]">
                            <Text
                              className="font-bold mt-[2px] text-gray_900 text-left tracking-ls011999999731779099 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              ON
                            </Text>
                            <Switch value={true} className="w-[23%]" />
                          </div>
                          <Img
                            src="images/img_arrowup.svg"
                            className="h-[34px] w-[auto]"
                            alt="arrowup"
                          />
                          <Text
                            className="font-bold md:ml-[0] sm:ml-[0] ml-[3px] text-deep_purple_A200 text-left tracking-ls014000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Water Pump
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border hover:border-0 border-indigo_50_ce border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[6px] rounded-radius25 hover:shadow-bs shadow-bs hover:w-[100%] w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[16px] md:w-[100%] sm:w-[100%] w-[91%]">
                          <div className="flex flex-row gap-[76px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[90%]">
                            <Text
                              className="font-bold mt-[2px] text-left text-white_A700 tracking-ls011999999731779099 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              ON
                            </Text>
                            <Switch value={true} className="w-[23%]" />
                          </div>
                          <Img
                            src="images/img_rewind.svg"
                            className="h-[44px] mt-[7px] w-[44px]"
                            alt="rewind"
                          />
                          <Text
                            className="font-bold md:ml-[0] sm:ml-[0] ml-[14px] mt-[5px] text-left text-white_A700 tracking-ls014000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Temperature
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border hover:border-0 border-indigo_50_ce border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[12px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[10px] pl-[4px] md:w-[100%] sm:w-[100%] w-[95%]">
                          <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] sm:w-[100%] w-[97%]">
                            <Text
                              className="font-bold mt-[2px] text-gray_900 text-left tracking-ls011999999731779099 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              OFF
                            </Text>
                            <Switch value={false} className="w-[auto]" />
                          </div>
                          <Img
                            src="images/img_minimize.svg"
                            className="h-[37px] mt-[9px] w-[auto]"
                            alt="minimize"
                          />
                          <Text
                            className="font-bold md:ml-[0] sm:ml-[0] ml-[4px] mt-[10px] text-bluegray_300 text-left tracking-ls014000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Motion Sensor
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border hover:border-0 border-indigo_50_ce border-solid hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-[9px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[13px] md:w-[100%] sm:w-[100%] w-[93%]">
                          <div className="flex flex-row gap-[71px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[92%]">
                            <Text
                              className="font-bold mt-[2px] text-gray_900 text-left tracking-ls011999999731779099 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              OFF
                            </Text>
                            <Switch value={false} className="w-[23%]" />
                          </div>
                          <Img
                            src="images/img_lightbulb.svg"
                            className="h-[44px] mt-[7px] w-[44px]"
                            alt="lightbulb"
                          />
                          <Text
                            className="font-bold md:ml-[0] sm:ml-[0] ml-[11px] mt-[5px] text-bluegray_300 text-left tracking-ls014000000059604645 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Lights
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="bg-white_A700 border border-indigo_50 border-solid flex flex-col items-center justify-start mt-[25px] p-[20px] rounded-radius28 w-[100%]">
                      <div className="flex flex-col gap-[138px] md:gap-[40px] sm:gap-[40px] items-center justify-start mb-[121px] md:w-[100%] sm:w-[100%] w-[98%]">
                        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[36px] w-[36px]"
                            alt="floatingicon"
                          />
                          <Text
                            className="font-semibold md:ml-[0] sm:ml-[0] ml-[12px] text-deep_purple_A200 text-left tracking-ls01599999964237213 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Living Room Temperature
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] sm:ml-[0] ml-[359px] text-gray_900 text-left tracking-ls01599999964237213 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ON
                          </Text>
                          <Switch
                            value={true}
                            className="md:ml-[0] sm:ml-[0] ml-[15px] w-[6%]"
                          />
                        </div>
                        <Img
                          src="images/img_group44.svg"
                          className="h-[54px] w-[auto]"
                          alt="GroupFortyFour"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[35px] justify-start md:mt-[0] sm:mt-[0] mt-[21px] md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-row items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_settings_gray_900.svg"
                      className="h-[51px] w-[50px]"
                      alt="settings One"
                    />
                    <Img
                      src="images/img_notification.svg"
                      className="h-[51px] ml-[10px] w-[50px]"
                      alt="notification"
                    />
                    <div className="flex flex-row items-center justify-end ml-[12px] w-[56%]">
                      <Img
                        src="images/img_user.svg"
                        className="h-[51px] w-[50px]"
                        alt="user"
                      />
                      <Text
                        className="ml-[5px] text-gray_900 text-left tracking-ls06942856907844543 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Scarlett
                      </Text>
                      <Img
                        src="images/img_arrowdown_gray_900.svg"
                        className="h-[9px] ml-[13px] w-[auto]"
                        alt="arrowdown One"
                      />
                    </div>
                  </div>
                  <div className="bg-gray_100 border border-bluegray_50_99 border-solid flex flex-col items-center justify-start p-[25px] sm:px-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col gap-[18px] items-center justify-start md:w-[100%] sm:w-[100%] w-[98%]">
                      <div className="flex flex-row items-end justify-start w-[100%]">
                        <Text
                          className="mb-[3px] mt-[11px] text-gray_900 text-left tracking-ls07692862749099731 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          My Devices
                        </Text>
                        <Button
                          className="flex items-center justify-center ml-[185px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="ml-[20px] text-center"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder10"
                          size="sm"
                          variant="FillBluegray50"
                        >
                          <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-gray_900 text-left tracking-ls014000000059604645 md:tracking-ls1 sm:tracking-ls1">
                            ON
                          </div>
                        </Button>
                        <Button className="flex h-[36px] items-center justify-center ml-[20px] rotate-[90deg] w-[36px]">
                          <Img
                            src="images/img_arrowright.svg"
                            className=""
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="gap-[17px] sm:gap-[20px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="bg-deep_purple_A200 flex flex-col items-center justify-start p-[8px] rounded-radius22 w-[100%]">
                              <div className="flex flex-col items-center justify-start my-[11px] md:w-[100%] sm:w-[100%] w-[97%]">
                                <div className="flex flex-col gap-[10px] justify-start w-[100%]">
                                  <div className="flex flex-row items-center justify-start w-[100%]">
                                    <Img
                                      src="images/img_calendar.svg"
                                      className="h-[44px] w-[44px]"
                                      alt="calendar"
                                    />
                                    <Text
                                      className="font-semibold ml-[82px] text-left text-white_A700 tracking-ls011999999731779099 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                      variant="body2"
                                    >
                                      ON
                                    </Text>
                                    <Switch
                                      value={true}
                                      className="ml-[9px] w-[16%]"
                                    />
                                  </div>
                                  <Text
                                    className="font-bold md:ml-[0] sm:ml-[0] ml-[12px] text-left text-white_A700 tracking-ls01599999964237213 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Refridgerator
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="bg-yellow_700 flex flex-col items-center justify-start p-[12px] rounded-radius22 w-[100%]">
                              <div className="flex flex-col items-center justify-start my-[7px] md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                                  <div className="flex flex-row items-center justify-start w-[100%]">
                                    <Img
                                      src="images/img_signal.svg"
                                      className="h-[44px] w-[44px]"
                                      alt="signal"
                                    />
                                    <Text
                                      className="font-semibold ml-[78px] text-left text-white_A700 tracking-ls011999999731779099 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                      variant="body2"
                                    >
                                      ON
                                    </Text>
                                    <Switch
                                      value={true}
                                      className="ml-[9px] w-[16%]"
                                    />
                                  </div>
                                  <Text
                                    className="font-bold md:ml-[0] sm:ml-[0] ml-[5px] text-left text-white_A700 tracking-ls01599999964237213 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Router
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="bg-deep_orange_300 flex flex-col items-center justify-start p-[11px] rounded-radius22 w-[100%]">
                              <div className="flex flex-col items-center justify-start my-[8px] md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-col gap-[10px] justify-start w-[100%]">
                                  <div className="flex flex-row items-center justify-start w-[100%]">
                                    <Img
                                      src="images/img_group39.svg"
                                      className="h-[44px] w-[44px]"
                                      alt="GroupThirtyNine"
                                    />
                                    <Text
                                      className="font-semibold ml-[79px] text-left text-white_A700 tracking-ls011999999731779099 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                      variant="body2"
                                    >
                                      ON
                                    </Text>
                                    <Switch
                                      value={true}
                                      className="ml-[9px] w-[16%]"
                                    />
                                  </div>
                                  <Text
                                    className="font-bold md:ml-[0] sm:ml-[0] ml-[9px] text-left text-white_A700 tracking-ls01599999964237213 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Music System
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
                            <div className="bg-cyan_300 flex flex-col items-center justify-start p-[12px] rounded-radius22 w-[100%]">
                              <div className="flex flex-col items-center justify-start my-[7px] md:w-[100%] sm:w-[100%] w-[99%]">
                                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                                  <div className="flex flex-row items-center justify-start w-[100%]">
                                    <Img
                                      src="images/img_computer.svg"
                                      className="h-[44px] w-[44px]"
                                      alt="computer"
                                    />
                                    <Text
                                      className="font-semibold ml-[78px] text-left text-white_A700 tracking-ls011999999731779099 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                      variant="body2"
                                    >
                                      ON
                                    </Text>
                                    <Switch
                                      value={true}
                                      className="ml-[9px] w-[16%]"
                                    />
                                  </div>
                                  <Text
                                    className="font-bold md:ml-[0] sm:ml-[0] ml-[5px] text-left text-white_A700 tracking-ls01599999964237213 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Lamps
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start mt-[23px] md:w-[100%] sm:w-[100%] w-[98%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="text-gray_900 text-left tracking-ls07692862749099731 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Members
                        </Text>
                        <Button className="flex h-[36px] items-center justify-center rotate-[90deg] w-[36px]">
                          <Img
                            src="images/img_arrowright.svg"
                            className=""
                            alt="arrowright One"
                          />
                        </Button>
                      </div>
                      <div className="bg-white_A700 border border-indigo_50_ce border-solid flex flex-col items-center justify-start p-[18px] rounded-radius28 w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                          <div className="flex flex-col items-center justify-start pb-[3px] sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_user_deep_purple_a200.svg"
                              className="h-[53px] w-[auto]"
                              alt="user One"
                            />
                            <Text
                              className="font-semibold mt-[2px] text-black_900 text-left tracking-ls012999999523162842 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body1"
                            >
                              Scarlett
                            </Text>
                            <Text
                              className="mt-[5px] text-bluegray_300 text-left tracking-ls010999999940395355 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body3"
                            >
                              Admin
                            </Text>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-[24px] grid grid-cols-4 w-[auto]"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col items-center justify-start sm:ml-[0] w-[100%]">
                              <Img
                                src="images/img_user_deep_orange_300.svg"
                                className="h-[53px] w-[auto]"
                                alt="user Two"
                              />
                              <Text
                                className="font-semibold mt-[4px] text-black_900 text-left tracking-ls012999999523162842 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Nariya
                              </Text>
                              <Text
                                className="mb-[2px] mt-[5px] text-bluegray_300 text-left tracking-ls010999999940395355 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body3"
                              >
                                Full Access
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] w-[100%]">
                              <Img
                                src="images/img_notification_deep_orange_300.svg"
                                className="h-[53px] w-[auto]"
                                alt="notification One"
                              />
                              <Text
                                className="font-semibold mt-[4px] text-black_900 text-left tracking-ls012999999523162842 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Riya
                              </Text>
                              <Text
                                className="mb-[2px] mt-[5px] text-bluegray_300 text-left tracking-ls010999999940395355 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body3"
                              >
                                Full Access
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] w-[100%]">
                              <Img
                                src="images/img_question.svg"
                                className="h-[53px] w-[auto]"
                                alt="question"
                              />
                              <Text
                                className="font-semibold mt-[2px] text-black_900 text-left tracking-ls012999999523162842 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Dad
                              </Text>
                              <Text
                                className="mb-[2px] mt-[5px] text-bluegray_300 text-left tracking-ls010999999940395355 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body3"
                              >
                                Full Access
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] w-[100%]">
                              <Img
                                src="images/img_map.svg"
                                className="h-[53px] w-[auto]"
                                alt="map"
                              />
                              <Text
                                className="font-semibold mt-[2px] text-black_900 text-left tracking-ls012999999523162842 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Mom
                              </Text>
                              <Text
                                className="mb-[2px] mt-[5px] text-bluegray_300 text-left tracking-ls010999999940395355 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body3"
                              >
                                Full Access
                              </Text>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start mb-[3px] mt-[25px] md:w-[100%] sm:w-[100%] w-[98%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                        <Text
                          className="text-gray_900 text-left tracking-ls07692862749099731 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Power Consumed
                        </Text>
                        <SelectBox
                          className="sm:flex-1 font-semibold sm:ml-[0] ml-[88px] text-[14px] text-gray_900 text-left tracking-ls014000000059604645 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[29%]"
                          placeholderClassName="text-gray_900"
                          name="Group8Copy One"
                          placeholder="Month"
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_calendar_deep_purple_a200.svg"
                                className="h-[14px] mr-[8px] w-[14px]"
                                alt="calendar"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[8px] mr-[14px] w-[12px]"
                              alt="arrow_down"
                            />
                          }
                          size="md"
                        ></SelectBox>
                        <Button className="flex h-[36px] items-center justify-center sm:ml-[0] ml-[20px] rotate-[90deg] w-[36px]">
                          <Img
                            src="images/img_arrowright.svg"
                            className=""
                            alt="arrowright Two"
                          />
                        </Button>
                      </div>
                      <div className="md:h-[275px] sm:h-[275px] h-[282px] relative w-[100%]">
                        <div className="md:h-[275px] sm:h-[275px] h-[282px] m-[auto] w-[100%]">
                          <div className="absolute bg-white_A700 border border-indigo_50_ce border-solid flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] p-[16px] rounded-radius28 w-[100%]">
                            <div className="flex flex-col gap-[33px] items-start justify-start mb-[27px] mt-[4px] w-[100%]">
                              <div className="flex flex-row items-center justify-between w-[100%]">
                                <Radio
                                  value="ElectricityConsumed"
                                  className="font-semibold text-[13px] text-gray_900 text-left tracking-ls012999999523162842 md:tracking-ls1 sm:tracking-ls1"
                                  inputClassName="h-[16px] mr-[5px] w-[16px]"
                                  checked={true}
                                  name="ElectricityConsumed"
                                  label="Electricity Consumed"
                                ></Radio>
                                <div className="flex flex-col items-center justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-gray_900 text-left tracking-ls012999999523162842 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                    variant="body1"
                                  >
                                    73% Spending
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col font-lato gap-[33px] items-start justify-start md:w-[100%] sm:w-[100%] w-[8%]">
                                <Text
                                  className="font-semibold text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                  variant="body1"
                                >
                                  75%
                                </Text>
                                <Text
                                  className="font-semibold text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                  variant="body1"
                                >
                                  50%
                                </Text>
                                <Text
                                  className="font-semibold text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                  variant="body1"
                                >
                                  25%
                                </Text>
                                <Text
                                  className="font-semibold text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                  variant="body1"
                                >
                                  0
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-lato items-start justify-end p-[3px] right-[0] w-[89%]"
                            style={{
                              backgroundImage: "url('images/img_group2.png')",
                            }}
                          >
                            <div className="flex flex-row items-center justify-start mb-[24px] mr-[auto] mt-[159px] md:w-[100%] sm:w-[100%] w-[93%]">
                              <Text
                                className="font-medium text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Jan
                              </Text>
                              <Text
                                className="font-medium ml-[22px] text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Feb
                              </Text>
                              <Text
                                className="font-medium ml-[22px] text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Mar
                              </Text>
                              <Text
                                className="font-medium ml-[22px] text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Apr
                              </Text>
                              <Text
                                className="font-medium ml-[22px] text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                May
                              </Text>
                              <Text
                                className="font-medium ml-[22px] text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                June
                              </Text>
                              <Text
                                className="font-medium ml-[21px] text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                july
                              </Text>
                              <Text
                                className="font-medium ml-[23px] text-bluegray_300_90 text-left tracking-ls018571433424949646 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                Aug
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_group56.png"
                          className="absolute bottom-[15%] h-[170px] object-cover right-[5%] w-[auto]"
                          alt="GroupFiftySix"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartHomePage;
