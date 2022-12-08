import React from "react";
import { useForm } from "react-hook-form";
import InputDateForm from "./components/InputDateForm";
import InputTimeForm from "./components/InputTimeForm";
// import { v4 as uuidv4 } from "uuid";
// import { axios } from "axios";
// import sv from "date-fns/locale/sv";

/*https://react-hook-form.com/form-builder */

/* const iduuid = uuidv4();
console.log(iduuid); */

function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));  // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="container mt-5 row">
      <div className="">
        <div className="card text-center" style={{ opacity: "0.9" }}>
          <div className="card-header text-center">
            <h5>Boka bastu/bord/omkäldningsrum </h5>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body d-inline-flex flex-column">
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && (
                <div className="text-center m-5">
                  <span className="mark">Informationen är obligatorisk!</span>
                </div>
              )}

              {/* register your input into the hook by invoking the "register" function */}
              <div className="form-floating m-2">
                <input
                  {...register("example", { required: true })}
                  className="form-control"
                  id="floatingInput"
                />
                <label htmlFor="floatingInput">Namn</label>
              </div>

              {/* include validation with required or other standard HTML validation rules */}
              <div className="form-floating m-2">
                <input
                  {...register("exampleRequired", { required: true })}
                  className="form-control"
                  id="floatingInput"
                />

                <label htmlFor="floatingInput">E-post</label>
              </div>
              <label className="ms-5 mt-5 form-label">Vad vill du boka?</label>
              <div className="form-check ms-1 mt-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="sauna"
                  placeholder="sauna"
                  {...register("sauna", {})}
                />
                <label className="form-check-label" htmlFor="sauna">
                  <h5>Bastu</h5>
                </label>
              </div>

              <div className="form-check ms-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="table"
                  placeholder="table"
                  {...register("table", {})}
                />
                <label className="form-check-label" htmlFor="table">
                  <h5>Bordtennisbord</h5>
                </label>
              </div>

              <div className="form-check ms-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="lockerroom"
                  placeholder="lockerroom"
                  {...register("lockerroom", {})}
                />
                <label className="form-check-label" htmlFor="lockerroom">
                  <h5>Omklädningsrum</h5>
                </label>
              </div>
            </div>

            <div className="d-inline-flex flex-column m-1">
              <h4>Vilken dag?</h4>
              <InputDateForm key="inputDateForm" control={control} />
            </div>
            <div className="d-inline-flex flex-column m-1">
              <h4>Från vilken tid?</h4>
              <InputTimeForm
                key="inputTimeFrom"
                name="fromTime"
                control={control}
              />
              <h4 className="mt-5">Till vilken tid?</h4>
              <InputTimeForm
                key="inputTimeTo"
                name="toTime"
                control={control}
              />
            </div>

            <input type="submit" className="btn  btn-light m-2" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
