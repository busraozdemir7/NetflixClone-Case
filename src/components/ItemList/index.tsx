import { FC } from "react";

type CountryType = { iso_3166_1: string; name: string };

type CompanyType = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

type LanguageType = {
    english_name: string;
    iso_639_1: string;
    name: string;
};

type PropsType = {
    data: CompanyType[] | CountryType[] | LanguageType[];
};

const ItemList: FC<PropsType> = ({ data }) => {
    return (
        <div className="my-5">
            <h2 className="font-semibold">Production Companies</h2>

            <div className="flex gap-5">
                {data.map((item) => (
                    <p className="text-gray-500">{item.name}</p>
                ))}
            </div>
        </div>
    );
};

export default ItemList;
