import { Head, Link } from "@inertiajs/react";
import Sidebaragent from "../../../Components/Agentsidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteIcon from "@mui/icons-material/Delete";

function Create({ auth, users, properties, options }) {
    const actives = [
        { value: 1, label: "Active" },
        { value: 2, label: "Inactive" },
    ];
    const [inputFields, setinputFields] = useState([]);

    const [addproperties, setProperties] = useState({
        agent_name: users[0].name,
        properties_type: "",
        buyrent: "",
        addproperties: "",
        bathroom: "",
        squarearea: "",
        cooling: "",
        heating: "",
        parking_areas: "",
        deposit_fees: "",
        location: "",
        built_year: "",
        total_area: "",
        active: "",
        image: inputFields,
        description: "",
    });

    const PropertiesVal = (e) => {
        const { name, value } = e.target;
        setProperties({
            ...addproperties,
            [name]: value,
        });
    };

    const createProperties = (event) => {
        event.preventDefault();

        Inertia.post(route("add-properites.store"), addproperties);
    };

    const Addimage = () => {
        setinputFields([
            ...inputFields,
            <input
                key={inputFields.length}
                type="file"
                className="my-4 rounded-md p-2 bg-blue-50 outline-none w-[35%]"
                name="image"
            />,
        ]);
        console.log(inputFields);
    };

    const removeImage = () => {
        if (inputFields.length > 0) {
            setinputFields(inputFields.slice(0, -1));
        }
    };

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();

        setProperties((prevState) => ({
            ...prevState,
            description: data,
        }));
    };

    return (
        <div>
            <Sidebaragent />
            <AuthenticatedLayout user={auth.user}>
                <Head title="Agent Add Properties" />

                <div className="py-12">
                    <div className="ml-48 mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="create_properties_agent form p-4">
                                <form onSubmit={createProperties} method="POST">
                                    <div className="grid grid-cols-3 gap-x-8">
                                        <div className="agent_name">
                                            <label
                                                htmlFor="agent_name"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Agent
                                            </label>
                                            <br></br>

                                            <input
                                                name="agent_name"
                                                className="w-full rounded-md my-4"
                                                value={addproperties.agent_name}
                                                onChange={PropertiesVal}
                                                readOnly="readonly"
                                            />
                                        </div>

                                        <div className="properties_type">
                                            <label
                                                htmlFor="addproperties"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Properties Type
                                            </label>
                                            <br></br>

                                            <select
                                                name="properties_type"
                                                className="w-full rounded-md my-4"
                                                onChange={PropertiesVal}
                                                value={
                                                    addproperties.properties_type
                                                }
                                            >
                                                <option>
                                                    Select Properties Type
                                                </option>
                                                {properties.map((property) => (
                                                    <option
                                                        key={property.id}
                                                        className="my-4 rounded-md w-full   bg-blue-50 outline-none"
                                                        value={property.id}
                                                    >
                                                        {
                                                            property.properties_categories
                                                        }
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="buy_rent">
                                            <label
                                                htmlFor="buyrent"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Buy Rent
                                            </label>
                                            <br></br>
                                            <select
                                                name="buyrent"
                                                className="my-4 rounded-md w-full bg-blue-50 outline-none"
                                                onChange={PropertiesVal}
                                                value={addproperties.buyrent}
                                            >
                                                <option>Select Buy/Rent</option>
                                                {options.map((option) => (
                                                    <option
                                                        key={option.id}
                                                        value={option.id}
                                                    >
                                                        {option.sale_rent}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="properties">
                                            <label
                                                htmlFor="addproperties"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Number of Bedrooms
                                            </label>
                                            <br></br>
                                            <input
                                                type="text"
                                                name="addproperties"
                                                required
                                                className="my-4 rounded-md w-full  bg-blue-50 outline-none"
                                                onChange={PropertiesVal}
                                                value={
                                                    addproperties.addproperties
                                                }
                                            />
                                        </div>

                                        <div className="bathroom">
                                            <label
                                                htmlFor="bathroom"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Number of Bathrooms
                                            </label>
                                            <br></br>
                                            <input
                                                type="text"
                                                name="bathroom"
                                                required
                                                className="my-4 rounded-md w-full  bg-blue-50 outline-none"
                                                onChange={PropertiesVal}
                                                value={addproperties.bathroom}
                                            />
                                        </div>

                                        <div className="square-area">
                                            <label
                                                htmlFor="square-area"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Square Area
                                            </label>
                                            <br></br>
                                            <input
                                                type="text"
                                                name="squarearea"
                                                required
                                                className="my-4 rounded-md w-full  bg-blue-50 outline-none"
                                                onChange={PropertiesVal}
                                                value={addproperties.squarearea}
                                            />
                                        </div>

                                        <div className="cooling">
                                            <label
                                                htmlFor="cooling"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Cooling
                                            </label>
                                            <br></br>

                                            <select
                                                name="cooling"
                                                className="my-4 rounded-md w-full  bg-blue-50 outline-none"
                                                value={addproperties.cooling}
                                                onChange={PropertiesVal}
                                            >
                                                <option>Select Cooling</option>
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>
                                        </div>
                                        <div className="heating">
                                            <label
                                                htmlFor="heating"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Heating
                                            </label>
                                            <br></br>
                                            <select
                                                name="heating"
                                                className="my-4 rounded-md w-full  bg-blue-50 outline-none"
                                                value={addproperties.heating}
                                                onChange={PropertiesVal}
                                            >
                                                <option>Select Heating</option>
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>
                                        </div>

                                        <div className="parking-areas">
                                            <label
                                                htmlFor="parkingareas"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Parking Areas
                                            </label>
                                            <br></br>
                                            <select
                                                name="parking_areas"
                                                required
                                                className="my-4 rounded-md w-full bg-blue-50 outline-none"
                                                onChange={PropertiesVal}
                                                value={
                                                    addproperties.parking_areas
                                                }
                                            >
                                                <option>
                                                    Select Parking Available
                                                </option>
                                                <option value="1">Yes</option>
                                                <option value="2">No</option>
                                            </select>
                                        </div>

                                        <div className="deposit_fees">
                                            <label
                                                htmlFor="deposit_fees"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Deposit Fee
                                            </label>
                                            <br></br>
                                            <input
                                                type="text"
                                                name="deposit_fees"
                                                required
                                                className="my-4 rounded-md w-full bg-blue-50 outline-none"
                                                onChange={PropertiesVal}
                                                value={
                                                    addproperties.deposit_fees
                                                }
                                            />
                                        </div>

                                        <div className="location">
                                            <label
                                                htmlFor="location"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Location
                                            </label>
                                            <br></br>
                                            <input
                                                type="text"
                                                name="location"
                                                required
                                                className="my-4 rounded-md w-full bg-blue-50 outline-none"
                                                onChange={PropertiesVal}
                                                value={addproperties.location}
                                            />
                                        </div>

                                        <div className="built_year">
                                            <label
                                                htmlFor="built_year"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Year Built
                                            </label>
                                            <br></br>
                                            <input
                                                type="text"
                                                name="built_year"
                                                required
                                                className="my-4 rounded-md w-full bg-blue-50 outline-none"
                                                onChange={PropertiesVal}
                                                value={addproperties.built_year}
                                            />
                                        </div>

                                        <div className="total_area">
                                            <label
                                                htmlFor="total_area"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Lot Area
                                            </label>
                                            <br></br>
                                            <input
                                                type="text"
                                                name="total_area"
                                                required
                                                className="my-4 rounded-md w-full bg-blue-50 outline-none"
                                                onChange={PropertiesVal}
                                                value={addproperties.total_area}
                                            />
                                        </div>

                                        <div className="active">
                                            <label
                                                htmlFor="active"
                                                className="text-lg font-bold font-sans"
                                            >
                                                Status
                                            </label>
                                            <br></br>
                                            <select
                                                name="active"
                                                className="my-4 rounded-md w-full bg-blue-50 outline-none "
                                                value={addproperties.active}
                                                onChange={PropertiesVal}
                                            >
                                                <option>Select Active</option>

                                                {actives.map((activ, index) => (
                                                    <option
                                                        key={index}
                                                        value={activ.value}
                                                    >
                                                        {activ.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="add_image">
                                        <label
                                            htmlFor="image"
                                            className="text-lg font-bold font-sans"
                                        >
                                            Add Image
                                        </label>
                                        <br></br>
                                        <input
                                            type="file"
                                            name="image"
                                            required
                                            className="my-4 rounded-md p-2 bg-blue-50 outline-none w-[35%]"
                                            onChange={PropertiesVal}
                                            value={addproperties.image}
                                        />
                                        {inputFields.map(
                                            (inputField, index) => (
                                                <div key={index} className="flex">
                                                    {inputField}
                                                    <DeleteIcon
                                                        onClick={removeImage}
                                                        style={{ color: "red" }}
                                                        className="cursor-pointer"
                                                    />
                                                </div>
                                            )
                                        )}

                                        <ControlPointIcon
                                            className="cursor-pointer ml-2 text-green-700"
                                            onClick={Addimage}
                                        />
                                    </div>

                                    <div className="add_description mb-4">
                                        <label
                                            htmlFor="add_description"
                                            className="text-lg font-bold font-sans"
                                        >
                                            Add Description
                                        </label>
                                        <br></br>

                                        <CKEditor
                                            editor={ClassicEditor}
                                            onChange={handleEditorChange}
                                        />
                                    </div>

                                    <div className="submit-button flex gap-x-4">
                                        <button className="bg-green-700 text-lg font-bold py-2 px-2 text-white rounded-md">
                                            Add Properties
                                        </button>
                                        <Link
                                            href={route("add-properites.index")}
                                            aria-label="cancel"
                                            className="bg-red-700 text-lg font-bold py-2 px-5 text-white rounded-md"
                                        >
                                            Cancel
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}

export default Create;
