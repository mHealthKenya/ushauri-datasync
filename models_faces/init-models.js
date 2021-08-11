var DataTypes = require("sequelize").DataTypes;
var _Sheet1 = require("./Sheet1");
var _app_update = require("./app_update");
var _tbl__logs_copy = require("./tbl__logs_copy");
var _tbl_access_level = require("./tbl_access_level");
var _tbl_appointment = require("./tbl_appointment");
var _tbl_appointment_types = require("./tbl_appointment_types");
var _tbl_broadcast = require("./tbl_broadcast");
var _tbl_caregiver_not_on_care = require("./tbl_caregiver_not_on_care");
var _tbl_client = require("./tbl_client");
var _tbl_client_faces = require("./tbl_client_faces");
var _tbl_clinic = require("./tbl_clinic");
var _tbl_clnt_outcome = require("./tbl_clnt_outcome");
var _tbl_clnt_outgoing = require("./tbl_clnt_outgoing");
var _tbl_condition = require("./tbl_condition");
var _tbl_consituency = require("./tbl_consituency");
var _tbl_content = require("./tbl_content");
var _tbl_county = require("./tbl_county");
var _tbl_dfc_module = require("./tbl_dfc_module");
var _tbl_donor = require("./tbl_donor");
var _tbl_entry_point = require("./tbl_entry_point");
var _tbl_faces_report = require("./tbl_faces_report");
var _tbl_final_outcome = require("./tbl_final_outcome");
var _tbl_frequency = require("./tbl_frequency");
var _tbl_gender = require("./tbl_gender");
var _tbl_groups = require("./tbl_groups");
var _tbl_incoming = require("./tbl_incoming");
var _tbl_language = require("./tbl_language");
var _tbl_marital_status = require("./tbl_marital_status");
var _tbl_master_facility = require("./tbl_master_facility");
var _tbl_message_grouping = require("./tbl_message_grouping");
var _tbl_message_types = require("./tbl_message_types");
var _tbl_messages = require("./tbl_messages");
var _tbl_notification_flow = require("./tbl_notification_flow");
var _tbl_other_appointment_types = require("./tbl_other_appointment_types");
var _tbl_other_final_outcome = require("./tbl_other_final_outcome");
var _tbl_outcome = require("./tbl_outcome");
var _tbl_partner = require("./tbl_partner");
var _tbl_partner_facility = require("./tbl_partner_facility");
var _tbl_pmtct = require("./tbl_pmtct");
var _tbl_responses = require("./tbl_responses");
var _tbl_role = require("./tbl_role");
var _tbl_sms_queue = require("./tbl_sms_queue");
var _tbl_sub_county = require("./tbl_sub_county");
var _tbl_time = require("./tbl_time");
var _tbl_transit_app = require("./tbl_transit_app");
var _tbl_user_permission = require("./tbl_user_permission");
var _tbl_users = require("./tbl_users");
var _tbl_usr_outgoing = require("./tbl_usr_outgoing");
var _tbl_ward = require("./tbl_ward");

function initModels(sequelize) {
  var Sheet1 = _Sheet1(sequelize, DataTypes);
  var app_update = _app_update(sequelize, DataTypes);
  var tbl__logs_copy = _tbl__logs_copy(sequelize, DataTypes);
  var tbl_access_level = _tbl_access_level(sequelize, DataTypes);
  var tbl_appointment = _tbl_appointment(sequelize, DataTypes);
  var tbl_appointment_types = _tbl_appointment_types(sequelize, DataTypes);
  var tbl_broadcast = _tbl_broadcast(sequelize, DataTypes);
  var tbl_caregiver_not_on_care = _tbl_caregiver_not_on_care(sequelize, DataTypes);
  var tbl_client = _tbl_client(sequelize, DataTypes);
  var tbl_client_faces = _tbl_client_faces(sequelize, DataTypes);
  var tbl_clinic = _tbl_clinic(sequelize, DataTypes);
  var tbl_clnt_outcome = _tbl_clnt_outcome(sequelize, DataTypes);
  var tbl_clnt_outgoing = _tbl_clnt_outgoing(sequelize, DataTypes);
  var tbl_condition = _tbl_condition(sequelize, DataTypes);
  var tbl_consituency = _tbl_consituency(sequelize, DataTypes);
  var tbl_content = _tbl_content(sequelize, DataTypes);
  var tbl_county = _tbl_county(sequelize, DataTypes);
  var tbl_dfc_module = _tbl_dfc_module(sequelize, DataTypes);
  var tbl_donor = _tbl_donor(sequelize, DataTypes);
  var tbl_entry_point = _tbl_entry_point(sequelize, DataTypes);
  var tbl_faces_report = _tbl_faces_report(sequelize, DataTypes);
  var tbl_final_outcome = _tbl_final_outcome(sequelize, DataTypes);
  var tbl_frequency = _tbl_frequency(sequelize, DataTypes);
  var tbl_gender = _tbl_gender(sequelize, DataTypes);
  var tbl_groups = _tbl_groups(sequelize, DataTypes);
  var tbl_incoming = _tbl_incoming(sequelize, DataTypes);
  var tbl_language = _tbl_language(sequelize, DataTypes);
  var tbl_marital_status = _tbl_marital_status(sequelize, DataTypes);
  var tbl_master_facility = _tbl_master_facility(sequelize, DataTypes);
  var tbl_message_grouping = _tbl_message_grouping(sequelize, DataTypes);
  var tbl_message_types = _tbl_message_types(sequelize, DataTypes);
  var tbl_messages = _tbl_messages(sequelize, DataTypes);
  var tbl_notification_flow = _tbl_notification_flow(sequelize, DataTypes);
  var tbl_other_appointment_types = _tbl_other_appointment_types(sequelize, DataTypes);
  var tbl_other_final_outcome = _tbl_other_final_outcome(sequelize, DataTypes);
  var tbl_outcome = _tbl_outcome(sequelize, DataTypes);
  var tbl_partner = _tbl_partner(sequelize, DataTypes);
  var tbl_partner_facility = _tbl_partner_facility(sequelize, DataTypes);
  var tbl_pmtct = _tbl_pmtct(sequelize, DataTypes);
  var tbl_responses = _tbl_responses(sequelize, DataTypes);
  var tbl_role = _tbl_role(sequelize, DataTypes);
  var tbl_sms_queue = _tbl_sms_queue(sequelize, DataTypes);
  var tbl_sub_county = _tbl_sub_county(sequelize, DataTypes);
  var tbl_time = _tbl_time(sequelize, DataTypes);
  var tbl_transit_app = _tbl_transit_app(sequelize, DataTypes);
  var tbl_user_permission = _tbl_user_permission(sequelize, DataTypes);
  var tbl_users = _tbl_users(sequelize, DataTypes);
  var tbl_usr_outgoing = _tbl_usr_outgoing(sequelize, DataTypes);
  var tbl_ward = _tbl_ward(sequelize, DataTypes);

  tbl_clnt_outcome.belongsTo(tbl_appointment, { as: "appointment", foreignKey: "appointment_id"});
  tbl_appointment.hasMany(tbl_clnt_outcome, { as: "tbl_clnt_outcomes", foreignKey: "appointment_id"});
  tbl_dfc_module.belongsTo(tbl_appointment, { as: "appointment", foreignKey: "appointment_id"});
  tbl_appointment.hasMany(tbl_dfc_module, { as: "tbl_dfc_modules", foreignKey: "appointment_id"});
  tbl_dfc_module.belongsTo(tbl_appointment, { as: "appointment_id_two_tbl_appointment", foreignKey: "appointment_id_two"});
  tbl_appointment.hasMany(tbl_dfc_module, { as: "appointment_id_two_tbl_dfc_modules", foreignKey: "appointment_id_two"});
  tbl_other_appointment_types.belongsTo(tbl_appointment, { as: "appointment", foreignKey: "appointment_id"});
  tbl_appointment.hasOne(tbl_other_appointment_types, { as: "tbl_other_appointment_type", foreignKey: "appointment_id"});
  tbl_other_final_outcome.belongsTo(tbl_appointment, { as: "appointment", foreignKey: "appointment_id"});
  tbl_appointment.hasMany(tbl_other_final_outcome, { as: "tbl_other_final_outcomes", foreignKey: "appointment_id"});
  tbl_appointment.belongsTo(tbl_appointment_types, { as: "app_type_1_tbl_appointment_type", foreignKey: "app_type_1"});
  tbl_appointment_types.hasMany(tbl_appointment, { as: "tbl_appointments", foreignKey: "app_type_1"});
  tbl_pmtct.belongsTo(tbl_caregiver_not_on_care, { as: "care_giver", foreignKey: "care_giver_id"});
  tbl_caregiver_not_on_care.hasMany(tbl_pmtct, { as: "tbl_pmtcts", foreignKey: "care_giver_id"});
  tbl_appointment.belongsTo(tbl_client, { as: "client", foreignKey: "client_id"});
  tbl_client.hasMany(tbl_appointment, { as: "tbl_appointments", foreignKey: "client_id"});
  tbl_clnt_outcome.belongsTo(tbl_client, { as: "client", foreignKey: "client_id"});
  tbl_client.hasMany(tbl_clnt_outcome, { as: "tbl_clnt_outcomes", foreignKey: "client_id"});
  tbl_dfc_module.belongsTo(tbl_client, { as: "client", foreignKey: "client_id"});
  tbl_client.hasMany(tbl_dfc_module, { as: "tbl_dfc_modules", foreignKey: "client_id"});
  tbl_pmtct.belongsTo(tbl_client, { as: "client", foreignKey: "client_id"});
  tbl_client.hasMany(tbl_pmtct, { as: "tbl_pmtcts", foreignKey: "client_id"});
  tbl__logs_copy.belongsTo(tbl_clinic, { as: "clinic", foreignKey: "clinic_id"});
  tbl_clinic.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "clinic_id"});
  tbl_client.belongsTo(tbl_clinic, { as: "clinic", foreignKey: "clinic_id"});
  tbl_clinic.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "clinic_id"});
  tbl_client_faces.belongsTo(tbl_clinic, { as: "clinic", foreignKey: "clinic_id"});
  tbl_clinic.hasMany(tbl_client_faces, { as: "tbl_client_faces", foreignKey: "clinic_id"});
  tbl_other_final_outcome.belongsTo(tbl_clnt_outcome, { as: "client_outcome", foreignKey: "client_outcome_id"});
  tbl_clnt_outcome.hasMany(tbl_other_final_outcome, { as: "tbl_other_final_outcomes", foreignKey: "client_outcome_id"});
  tbl_dfc_module.belongsTo(tbl_community_model, { as: "community_based_tbl_community_model", foreignKey: "community_based"});
  tbl_community_model.hasMany(tbl_dfc_module, { as: "tbl_dfc_modules", foreignKey: "community_based"});
  tbl_master_facility.belongsTo(tbl_consituency, { as: "consituency", foreignKey: "consituency_id"});
  tbl_consituency.hasMany(tbl_master_facility, { as: "tbl_master_facilities", foreignKey: "consituency_id"});
  tbl_master_facility.belongsTo(tbl_county, { as: "county", foreignKey: "county_id"});
  tbl_county.hasMany(tbl_master_facility, { as: "tbl_master_facilities", foreignKey: "county_id"});
  tbl_partner_facility.belongsTo(tbl_county, { as: "county", foreignKey: "county_id"});
  tbl_county.hasMany(tbl_partner_facility, { as: "tbl_partner_facilities", foreignKey: "county_id"});
  tbl_sub_county.belongsTo(tbl_county, { as: "county", foreignKey: "county_id"});
  tbl_county.hasMany(tbl_sub_county, { as: "tbl_sub_counties", foreignKey: "county_id"});
  tbl_partner.belongsTo(tbl_donor, { as: "donor", foreignKey: "donor_id"});
  tbl_donor.hasMany(tbl_partner, { as: "tbl_partners", foreignKey: "donor_id"});
  tbl_dfc_module.belongsTo(tbl_facility_based, { as: "facility_based_tbl_facility_based", foreignKey: "facility_based"});
  tbl_facility_based.hasMany(tbl_dfc_module, { as: "tbl_dfc_modules", foreignKey: "facility_based"});
  tbl__logs_copy.belongsTo(tbl_gender, { as: "gender_tbl_gender", foreignKey: "gender"});
  tbl_gender.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "gender"});
  tbl_caregiver_not_on_care.belongsTo(tbl_gender, { as: "care_giver_gender_tbl_gender", foreignKey: "care_giver_gender"});
  tbl_gender.hasMany(tbl_caregiver_not_on_care, { as: "tbl_caregiver_not_on_cares", foreignKey: "care_giver_gender"});
  tbl_client.belongsTo(tbl_gender, { as: "gender_tbl_gender", foreignKey: "gender"});
  tbl_gender.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "gender"});
  tbl_client_faces.belongsTo(tbl_gender, { as: "gender_tbl_gender", foreignKey: "gender"});
  tbl_gender.hasMany(tbl_client_faces, { as: "tbl_client_faces", foreignKey: "gender"});
  tbl_pmtct.belongsTo(tbl_gender, { as: "hei_gender_tbl_gender", foreignKey: "hei_gender"});
  tbl_gender.hasMany(tbl_pmtct, { as: "tbl_pmtcts", foreignKey: "hei_gender"});
  tbl__logs_copy.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "group_id"});
  tbl_client.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "group_id"});
  tbl_client_faces.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl_client_faces, { as: "tbl_client_faces", foreignKey: "group_id"});
  tbl_content.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl_content, { as: "tbl_contents", foreignKey: "group_id"});
  tbl_responses.belongsTo(tbl_incoming, { as: "incoming", foreignKey: "incoming_id"});
  tbl_incoming.hasOne(tbl_responses, { as: "tbl_response", foreignKey: "incoming_id"});
  tbl__logs_copy.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "language_id"});
  tbl_client.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "language_id"});
  tbl_client_faces.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_client_faces, { as: "tbl_client_faces", foreignKey: "language_id"});
  tbl_content.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_content, { as: "tbl_contents", foreignKey: "language_id"});
  tbl_messages.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_messages, { as: "tbl_messages", foreignKey: "language_id"});
  tbl__logs_copy.belongsTo(tbl_marital_status, { as: "marital_tbl_marital_status", foreignKey: "marital"});
  tbl_marital_status.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "marital"});
  tbl_client.belongsTo(tbl_marital_status, { as: "marital_tbl_marital_status", foreignKey: "marital"});
  tbl_marital_status.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "marital"});
  tbl_client_faces.belongsTo(tbl_marital_status, { as: "marital_tbl_marital_status", foreignKey: "marital"});
  tbl_marital_status.hasMany(tbl_client_faces, { as: "tbl_client_faces", foreignKey: "marital"});
  tbl__logs_copy.belongsTo(tbl_master_facility, { as: "mfl_code_tbl_master_facility", foreignKey: "mfl_code"});
  tbl_master_facility.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "mfl_code"});
  tbl_client.belongsTo(tbl_master_facility, { as: "mfl_code_tbl_master_facility", foreignKey: "mfl_code"});
  tbl_master_facility.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "mfl_code"});
  tbl_client_faces.belongsTo(tbl_master_facility, { as: "mfl_code_tbl_master_facility", foreignKey: "mfl_code"});
  tbl_master_facility.hasMany(tbl_client_faces, { as: "tbl_client_faces", foreignKey: "mfl_code"});
  tbl_partner_facility.belongsTo(tbl_master_facility, { as: "mfl_code_tbl_master_facility", foreignKey: "mfl_code"});
  tbl_master_facility.hasOne(tbl_partner_facility, { as: "tbl_partner_facility", foreignKey: "mfl_code"});
  tbl_messages.belongsTo(tbl_message_grouping, { as: "message_group", foreignKey: "message_group_id"});
  tbl_message_grouping.hasMany(tbl_messages, { as: "tbl_messages", foreignKey: "message_group_id"});
  tbl_clnt_outgoing.belongsTo(tbl_message_types, { as: "message_type", foreignKey: "message_type_id"});
  tbl_message_types.hasMany(tbl_clnt_outgoing, { as: "tbl_clnt_outgoings", foreignKey: "message_type_id"});
  tbl_content.belongsTo(tbl_message_types, { as: "message_type", foreignKey: "message_type_id"});
  tbl_message_types.hasMany(tbl_content, { as: "tbl_contents", foreignKey: "message_type_id"});
  tbl_messages.belongsTo(tbl_message_types, { as: "message_type", foreignKey: "message_type_id"});
  tbl_message_types.hasMany(tbl_messages, { as: "tbl_messages", foreignKey: "message_type_id"});
  tbl_usr_outgoing.belongsTo(tbl_message_types, { as: "message_type", foreignKey: "message_type_id"});
  tbl_message_types.hasMany(tbl_usr_outgoing, { as: "tbl_usr_outgoings", foreignKey: "message_type_id"});
  tbl_content.belongsTo(tbl_notification_flow, { as: "identifier_tbl_notification_flow", foreignKey: "identifier"});
  tbl_notification_flow.hasMany(tbl_content, { as: "tbl_contents", foreignKey: "identifier"});
  tbl_clnt_outcome.belongsTo(tbl_outcome, { as: "outcome_tbl_outcome", foreignKey: "outcome"});
  tbl_outcome.hasMany(tbl_clnt_outcome, { as: "tbl_clnt_outcomes", foreignKey: "outcome"});
  tbl_client.belongsTo(tbl_partner, { as: "partner", foreignKey: "partner_id"});
  tbl_partner.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "partner_id"});
  tbl_client_faces.belongsTo(tbl_partner, { as: "partner", foreignKey: "partner_id"});
  tbl_partner.hasMany(tbl_client_faces, { as: "tbl_client_faces", foreignKey: "partner_id"});
  tbl_client.belongsTo(tbl_pmtct, { as: "hei_no_tbl_pmtct", foreignKey: "hei_no"});
  tbl_pmtct.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "hei_no"});
  tbl_client_faces.belongsTo(tbl_pmtct, { as: "hei_no_tbl_pmtct", foreignKey: "hei_no"});
  tbl_pmtct.hasMany(tbl_client_faces, { as: "tbl_client_faces", foreignKey: "hei_no"});
  tbl_user_permission.belongsTo(tbl_role, { as: "role", foreignKey: "role_id"});
  tbl_role.hasMany(tbl_user_permission, { as: "tbl_user_permissions", foreignKey: "role_id"});
  tbl_users.belongsTo(tbl_role, { as: "role", foreignKey: "role_id"});
  tbl_role.hasMany(tbl_users, { as: "tbl_users", foreignKey: "role_id"});
  tbl_master_facility.belongsTo(tbl_sub_county, { as: "Sub_County", foreignKey: "Sub_County_ID"});
  tbl_sub_county.hasMany(tbl_master_facility, { as: "tbl_master_facilities", foreignKey: "Sub_County_ID"});
  tbl_partner_facility.belongsTo(tbl_sub_county, { as: "sub_county", foreignKey: "sub_county_id"});
  tbl_sub_county.hasMany(tbl_partner_facility, { as: "tbl_partner_facilities", foreignKey: "sub_county_id"});
  tbl_caregiver_not_on_care.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_caregiver_not_on_care, { as: "tbl_caregiver_not_on_cares", foreignKey: "created_by"});
  tbl_caregiver_not_on_care.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_caregiver_not_on_care, { as: "updated_by_tbl_caregiver_not_on_cares", foreignKey: "updated_by"});
  tbl_dfc_module.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_dfc_module, { as: "tbl_dfc_modules", foreignKey: "created_by"});
  tbl_dfc_module.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_dfc_module, { as: "updated_by_tbl_dfc_modules", foreignKey: "updated_by"});
  tbl_entry_point.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_entry_point, { as: "tbl_entry_points", foreignKey: "created_by"});
  tbl_entry_point.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_entry_point, { as: "updated_by_tbl_entry_points", foreignKey: "updated_by"});
  tbl_pmtct.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_pmtct, { as: "tbl_pmtcts", foreignKey: "created_by"});
  tbl_pmtct.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_pmtct, { as: "updated_by_tbl_pmtcts", foreignKey: "updated_by"});
  tbl_master_facility.belongsTo(tbl_ward, { as: "Ward", foreignKey: "Ward_id"});
  tbl_ward.hasMany(tbl_master_facility, { as: "tbl_master_facilities", foreignKey: "Ward_id"});

  return {
    Sheet1,
    app_update,
    tbl__logs_copy,
    tbl_access_level,
    tbl_appointment,
    tbl_appointment_types,
    tbl_broadcast,
    tbl_caregiver_not_on_care,
    tbl_client,
    tbl_client_faces,
    tbl_clinic,
    tbl_clnt_outcome,
    tbl_clnt_outgoing,
    tbl_condition,
    tbl_consituency,
    tbl_content,
    tbl_county,
    tbl_dfc_module,
    tbl_donor,
    tbl_entry_point,
    tbl_faces_report,
    tbl_final_outcome,
    tbl_frequency,
    tbl_gender,
    tbl_groups,
    tbl_incoming,
    tbl_language,
    tbl_marital_status,
    tbl_master_facility,
    tbl_message_grouping,
    tbl_message_types,
    tbl_messages,
    tbl_notification_flow,
    tbl_other_appointment_types,
    tbl_other_final_outcome,
    tbl_outcome,
    tbl_partner,
    tbl_partner_facility,
    tbl_pmtct,
    tbl_responses,
    tbl_role,
    tbl_sms_queue,
    tbl_sub_county,
    tbl_time,
    tbl_transit_app,
    tbl_user_permission,
    tbl_users,
    tbl_usr_outgoing,
    tbl_ward,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
