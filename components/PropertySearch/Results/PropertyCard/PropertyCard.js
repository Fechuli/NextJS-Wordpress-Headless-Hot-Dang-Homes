import Link from "next/link";
import Image from "next/image";
import numeral from "numeral";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBathtub, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";

export const PropertyCard = ({ title, destination, image, bathrooms, bedrooms, petFriendly, hasParking, price }) => {
    return (
      <Link href={destination} className={"border-2 mt-5 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200"}>
          <div className={"flex flex-col w-full"}>
              <Image src={image} width={300} height={150} alt={title} className={"max-h-[190px]"} />
              <div className={"mt-3 text-lg font-bold"}>{title}</div>
              <div className={"text-lg"}>€{numeral(price).format("0,0")}</div>
              <div className={"flex justify-between text-sm mt-3"}>
                  <div>
                      <FontAwesomeIcon icon={faBathtub} />
                      <span className={"pl-2"}>{bathrooms} bathrooms</span>
                  </div>
                  <div>
                      <FontAwesomeIcon icon={faBed} />
                      <span className={"pl-2"}>{bedrooms} bedrooms</span>
                  </div>
              </div>
              {(!!hasParking || !!petFriendly) && (
                <div className={"flex justify-between text-sm mt-3"}>
                    <div>
                        {!!hasParking &&
                          <>
                              <FontAwesomeIcon icon={faCar} /> parking available
                          </>
                        }
                    </div>
                    <div>
                        {!!petFriendly &&
                          <>
                              <FontAwesomeIcon icon={faDog} /> pet friendly
                          </>
                        }
                    </div>
                </div>
              )}
          </div>
      </Link>
    );
};