import {
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'

const MobileLegendForm = ({
  form,
  handleChange,
  isDisabled,
  errors
}) => {

  const placeholderMessage = "Contoh: 12345678 (1234). ID = 123456789 dan Server = 123. Untuk mengetahui User ID Anda, silahkan klik menu profile dibagian kiri atas pada menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama karakter game Anda."

  return (
    <>
      < FormGroup >
        <Label
          className="label-page"
          for="user_id"
        >
          {'User ID'}
        </Label>

        <Input
          type="number"
          name="user_id"
          id="user_id"
          placeholder="Masukkan User ID"
          value={form.user_id}
          onChange={handleChange}
          disabled={isDisabled}
          invalid={!!errors.user_id}
        />
        {
          errors.user_id && (
            <FormText color="danger">{errors.user_id}</FormText>
          )
        }
      </FormGroup>
      <FormGroup>
        <Label for="zone_id">{'Zone ID'}</Label>
        <Input
          type="number"
          name="zone_id"
          id="zone_id"
          placeholder="Masukkan Zone ID"
          value={form.zone_id}
          onChange={handleChange}
          disabled={isDisabled}
          invalid={!!errors.zone_id}
        />
        {
          errors.zone_id && (
            <FormText color="danger">{errors.zone_id}</FormText>
          )
        }
        <p>
          <em>
            {placeholderMessage}
          </em>
        </p>
      </FormGroup>
      <FormGroup>
        <Label for="wa">{'No.Whatsapp'}</Label>
        <Input
          type="text"
          name="wa"
          id="wa"
          placeholder="08xxxxx"
          value={form.wa}
          onChange={handleChange}
          disabled={isDisabled}
          invalid={!!errors.wa}
        />
        {
          errors.wa &&
          (
            <FormText color="danger">{errors.wa}</FormText>
          )
        }
      </FormGroup>
    </>
  )
}

export default MobileLegendForm
