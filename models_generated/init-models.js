var DataTypes = require("sequelize").DataTypes;
var _cache = require("./cache");
var _il_messages = require("./il_messages");
var _jobs = require("./jobs");
var _message = require("./message");
var _send_log = require("./send_log");
var _sender_status = require("./sender_status");
var _tbl__logs_copy = require("./tbl__logs_copy");
var _tbl_access_level = require("./tbl_access_level");
var _tbl_appointment = require("./tbl_appointment");
var _tbl_appointment_copy1 = require("./tbl_appointment_copy1");
var _tbl_appointment_msgs = require("./tbl_appointment_msgs");
var _tbl_appointment_types = require("./tbl_appointment_types");
var _tbl_broadcast = require("./tbl_broadcast");
var _tbl_caregiver_not_on_care = require("./tbl_caregiver_not_on_care");
var _tbl_client = require("./tbl_client");
var _tbl_client_backup = require("./tbl_client_backup");
var _tbl_client_copy = require("./tbl_client_copy");
var _tbl_client_copy1 = require("./tbl_client_copy1");
var _tbl_client_list_new = require("./tbl_client_list_new");
var _tbl_client_log = require("./tbl_client_log");
var _tbl_client_restore = require("./tbl_client_restore");
var _tbl_client_type = require("./tbl_client_type");
var _tbl_clinic = require("./tbl_clinic");
var _tbl_clnt_outcome = require("./tbl_clnt_outcome");
var _tbl_clnt_outgoing = require("./tbl_clnt_outgoing");
var _tbl_clnt_ushauri = require("./tbl_clnt_ushauri");
var _tbl_community_model = require("./tbl_community_model");
var _tbl_condition = require("./tbl_condition");
var _tbl_consituency = require("./tbl_consituency");
var _tbl_content = require("./tbl_content");
var _tbl_county = require("./tbl_county");
var _tbl_defaulted_query = require("./tbl_defaulted_query");
var _tbl_dfc_module = require("./tbl_dfc_module");
var _tbl_disabled_clients = require("./tbl_disabled_clients");
var _tbl_donor = require("./tbl_donor");
var _tbl_email = require("./tbl_email");
var _tbl_email_debugger = require("./tbl_email_debugger");
var _tbl_entry_point = require("./tbl_entry_point");
var _tbl_faces_report = require("./tbl_faces_report");
var _tbl_facility_based = require("./tbl_facility_based");
var _tbl_final_outcome = require("./tbl_final_outcome");
var _tbl_frequency = require("./tbl_frequency");
var _tbl_future_appointments_query = require("./tbl_future_appointments_query");
var _tbl_gender = require("./tbl_gender");
var _tbl_groups = require("./tbl_groups");
var _tbl_incoming = require("./tbl_incoming");
var _tbl_incoming_arch = require("./tbl_incoming_arch");
var _tbl_language = require("./tbl_language");
var _tbl_lost = require("./tbl_lost");
var _tbl_marital_status = require("./tbl_marital_status");
var _tbl_master_facility = require("./tbl_master_facility");
var _tbl_message_grouping = require("./tbl_message_grouping");
var _tbl_message_types = require("./tbl_message_types");
var _tbl_messages = require("./tbl_messages");
var _tbl_missed_query = require("./tbl_missed_query");
var _tbl_module = require("./tbl_module");
var _tbl_motivational_enable = require("./tbl_motivational_enable");
var _tbl_not_ok = require("./tbl_not_ok");
var _tbl_notfiable_time = require("./tbl_notfiable_time");
var _tbl_notification_flow = require("./tbl_notification_flow");
var _tbl_ok = require("./tbl_ok");
var _tbl_oru = require("./tbl_oru");
var _tbl_other_appointment_types = require("./tbl_other_appointment_types");
var _tbl_other_final_outcome = require("./tbl_other_final_outcome");
var _tbl_otp = require("./tbl_otp");
var _tbl_outcome = require("./tbl_outcome");
var _tbl_outcome_report_raw = require("./tbl_outcome_report_raw");
var _tbl_partner = require("./tbl_partner");
var _tbl_partner_facility = require("./tbl_partner_facility");
var _tbl_partner_type = require("./tbl_partner_type");
var _tbl_past_appointment_new = require("./tbl_past_appointment_new");
var _tbl_past_appointments = require("./tbl_past_appointments");
var _tbl_pmtct = require("./tbl_pmtct");
var _tbl_regimen = require("./tbl_regimen");
var _tbl_responses = require("./tbl_responses");
var _tbl_role = require("./tbl_role");
var _tbl_role_module = require("./tbl_role_module");
var _tbl_secondary_grouping = require("./tbl_secondary_grouping");
var _tbl_sender = require("./tbl_sender");
var _tbl_sent_logs = require("./tbl_sent_logs");
var _tbl_sent_status = require("./tbl_sent_status");
var _tbl_sessions = require("./tbl_sessions");
var _tbl_sms_checkin = require("./tbl_sms_checkin");
var _tbl_sms_queue = require("./tbl_sms_queue");
var _tbl_status = require("./tbl_status");
var _tbl_stop_alerts = require("./tbl_stop_alerts");
var _tbl_sub_county = require("./tbl_sub_county");
var _tbl_sys_logs = require("./tbl_sys_logs");
var _tbl_target_client = require("./tbl_target_client");
var _tbl_target_county = require("./tbl_target_county");
var _tbl_target_facility = require("./tbl_target_facility");
var _tbl_time = require("./tbl_time");
var _tbl_todays_appointment = require("./tbl_todays_appointment");
var _tbl_todays_appointment_query = require("./tbl_todays_appointment_query");
var _tbl_tracer_client = require("./tbl_tracer_client");
var _tbl_tracers = require("./tbl_tracers");
var _tbl_tracing_type = require("./tbl_tracing_type");
var _tbl_transit_app = require("./tbl_transit_app");
var _tbl_trcing_outcome = require("./tbl_trcing_outcome");
var _tbl_unrecognised = require("./tbl_unrecognised");
var _tbl_user_permission = require("./tbl_user_permission");
var _tbl_users = require("./tbl_users");
var _tbl_usr_outgoing = require("./tbl_usr_outgoing");
var _tbl_ward = require("./tbl_ward");
var _tbl_wellness_enable = require("./tbl_wellness_enable");

function initModels(sequelize) {
  var cache = _cache(sequelize, DataTypes);
  var il_messages = _il_messages(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var message = _message(sequelize, DataTypes);
  var send_log = _send_log(sequelize, DataTypes);
  var sender_status = _sender_status(sequelize, DataTypes);
  var tbl__logs_copy = _tbl__logs_copy(sequelize, DataTypes);
  var tbl_access_level = _tbl_access_level(sequelize, DataTypes);
  var tbl_appointment = _tbl_appointment(sequelize, DataTypes);
  var tbl_appointment_copy1 = _tbl_appointment_copy1(sequelize, DataTypes);
  var tbl_appointment_msgs = _tbl_appointment_msgs(sequelize, DataTypes);
  var tbl_appointment_types = _tbl_appointment_types(sequelize, DataTypes);
  var tbl_broadcast = _tbl_broadcast(sequelize, DataTypes);
  var tbl_caregiver_not_on_care = _tbl_caregiver_not_on_care(sequelize, DataTypes);
  var tbl_client = _tbl_client(sequelize, DataTypes);
  var tbl_client_backup = _tbl_client_backup(sequelize, DataTypes);
  var tbl_client_copy = _tbl_client_copy(sequelize, DataTypes);
  var tbl_client_copy1 = _tbl_client_copy1(sequelize, DataTypes);
  var tbl_client_list_new = _tbl_client_list_new(sequelize, DataTypes);
  var tbl_client_log = _tbl_client_log(sequelize, DataTypes);
  var tbl_client_restore = _tbl_client_restore(sequelize, DataTypes);
  var tbl_client_type = _tbl_client_type(sequelize, DataTypes);
  var tbl_clinic = _tbl_clinic(sequelize, DataTypes);
  var tbl_clnt_outcome = _tbl_clnt_outcome(sequelize, DataTypes);
  var tbl_clnt_outgoing = _tbl_clnt_outgoing(sequelize, DataTypes);
  var tbl_clnt_ushauri = _tbl_clnt_ushauri(sequelize, DataTypes);
  var tbl_community_model = _tbl_community_model(sequelize, DataTypes);
  var tbl_condition = _tbl_condition(sequelize, DataTypes);
  var tbl_consituency = _tbl_consituency(sequelize, DataTypes);
  var tbl_content = _tbl_content(sequelize, DataTypes);
  var tbl_county = _tbl_county(sequelize, DataTypes);
  var tbl_defaulted_query = _tbl_defaulted_query(sequelize, DataTypes);
  var tbl_dfc_module = _tbl_dfc_module(sequelize, DataTypes);
  var tbl_disabled_clients = _tbl_disabled_clients(sequelize, DataTypes);
  var tbl_donor = _tbl_donor(sequelize, DataTypes);
  var tbl_email = _tbl_email(sequelize, DataTypes);
  var tbl_email_debugger = _tbl_email_debugger(sequelize, DataTypes);
  var tbl_entry_point = _tbl_entry_point(sequelize, DataTypes);
  var tbl_faces_report = _tbl_faces_report(sequelize, DataTypes);
  var tbl_facility_based = _tbl_facility_based(sequelize, DataTypes);
  var tbl_final_outcome = _tbl_final_outcome(sequelize, DataTypes);
  var tbl_frequency = _tbl_frequency(sequelize, DataTypes);
  var tbl_future_appointments_query = _tbl_future_appointments_query(sequelize, DataTypes);
  var tbl_gender = _tbl_gender(sequelize, DataTypes);
  var tbl_groups = _tbl_groups(sequelize, DataTypes);
  var tbl_incoming = _tbl_incoming(sequelize, DataTypes);
  var tbl_incoming_arch = _tbl_incoming_arch(sequelize, DataTypes);
  var tbl_language = _tbl_language(sequelize, DataTypes);
  var tbl_lost = _tbl_lost(sequelize, DataTypes);
  var tbl_marital_status = _tbl_marital_status(sequelize, DataTypes);
  var tbl_master_facility = _tbl_master_facility(sequelize, DataTypes);
  var tbl_message_grouping = _tbl_message_grouping(sequelize, DataTypes);
  var tbl_message_types = _tbl_message_types(sequelize, DataTypes);
  var tbl_messages = _tbl_messages(sequelize, DataTypes);
  var tbl_missed_query = _tbl_missed_query(sequelize, DataTypes);
  var tbl_module = _tbl_module(sequelize, DataTypes);
  var tbl_motivational_enable = _tbl_motivational_enable(sequelize, DataTypes);
  var tbl_not_ok = _tbl_not_ok(sequelize, DataTypes);
  var tbl_notfiable_time = _tbl_notfiable_time(sequelize, DataTypes);
  var tbl_notification_flow = _tbl_notification_flow(sequelize, DataTypes);
  var tbl_ok = _tbl_ok(sequelize, DataTypes);
  var tbl_oru = _tbl_oru(sequelize, DataTypes);
  var tbl_other_appointment_types = _tbl_other_appointment_types(sequelize, DataTypes);
  var tbl_other_final_outcome = _tbl_other_final_outcome(sequelize, DataTypes);
  var tbl_otp = _tbl_otp(sequelize, DataTypes);
  var tbl_outcome = _tbl_outcome(sequelize, DataTypes);
  var tbl_outcome_report_raw = _tbl_outcome_report_raw(sequelize, DataTypes);
  var tbl_partner = _tbl_partner(sequelize, DataTypes);
  var tbl_partner_facility = _tbl_partner_facility(sequelize, DataTypes);
  var tbl_partner_type = _tbl_partner_type(sequelize, DataTypes);
  var tbl_past_appointment_new = _tbl_past_appointment_new(sequelize, DataTypes);
  var tbl_past_appointments = _tbl_past_appointments(sequelize, DataTypes);
  var tbl_pmtct = _tbl_pmtct(sequelize, DataTypes);
  var tbl_regimen = _tbl_regimen(sequelize, DataTypes);
  var tbl_responses = _tbl_responses(sequelize, DataTypes);
  var tbl_role = _tbl_role(sequelize, DataTypes);
  var tbl_role_module = _tbl_role_module(sequelize, DataTypes);
  var tbl_secondary_grouping = _tbl_secondary_grouping(sequelize, DataTypes);
  var tbl_sender = _tbl_sender(sequelize, DataTypes);
  var tbl_sent_logs = _tbl_sent_logs(sequelize, DataTypes);
  var tbl_sent_status = _tbl_sent_status(sequelize, DataTypes);
  var tbl_sessions = _tbl_sessions(sequelize, DataTypes);
  var tbl_sms_checkin = _tbl_sms_checkin(sequelize, DataTypes);
  var tbl_sms_queue = _tbl_sms_queue(sequelize, DataTypes);
  var tbl_status = _tbl_status(sequelize, DataTypes);
  var tbl_stop_alerts = _tbl_stop_alerts(sequelize, DataTypes);
  var tbl_sub_county = _tbl_sub_county(sequelize, DataTypes);
  var tbl_sys_logs = _tbl_sys_logs(sequelize, DataTypes);
  var tbl_target_client = _tbl_target_client(sequelize, DataTypes);
  var tbl_target_county = _tbl_target_county(sequelize, DataTypes);
  var tbl_target_facility = _tbl_target_facility(sequelize, DataTypes);
  var tbl_time = _tbl_time(sequelize, DataTypes);
  var tbl_todays_appointment = _tbl_todays_appointment(sequelize, DataTypes);
  var tbl_todays_appointment_query = _tbl_todays_appointment_query(sequelize, DataTypes);
  var tbl_tracer_client = _tbl_tracer_client(sequelize, DataTypes);
  var tbl_tracers = _tbl_tracers(sequelize, DataTypes);
  var tbl_tracing_type = _tbl_tracing_type(sequelize, DataTypes);
  var tbl_transit_app = _tbl_transit_app(sequelize, DataTypes);
  var tbl_trcing_outcome = _tbl_trcing_outcome(sequelize, DataTypes);
  var tbl_unrecognised = _tbl_unrecognised(sequelize, DataTypes);
  var tbl_user_permission = _tbl_user_permission(sequelize, DataTypes);
  var tbl_users = _tbl_users(sequelize, DataTypes);
  var tbl_usr_outgoing = _tbl_usr_outgoing(sequelize, DataTypes);
  var tbl_ward = _tbl_ward(sequelize, DataTypes);
  var tbl_wellness_enable = _tbl_wellness_enable(sequelize, DataTypes);

  tbl_ok.belongsTo(tbl__logs_copy, { as: "client", foreignKey: "client_id"});
  tbl__logs_copy.hasMany(tbl_ok, { as: "tbl_oks", foreignKey: "client_id"});
  tbl_unrecognised.belongsTo(tbl__logs_copy, { as: "client", foreignKey: "client_id"});
  tbl__logs_copy.hasMany(tbl_unrecognised, { as: "tbl_unrecogniseds", foreignKey: "client_id"});
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
  tbl_tracer_client.belongsTo(tbl_appointment, { as: "app", foreignKey: "app_id"});
  tbl_appointment.hasMany(tbl_tracer_client, { as: "tbl_tracer_clients", foreignKey: "app_id"});
  tbl_appointment.belongsTo(tbl_appointment_types, { as: "app_type_1_tbl_appointment_type", foreignKey: "app_type_1"});
  tbl_appointment_types.hasMany(tbl_appointment, { as: "tbl_appointments", foreignKey: "app_type_1"});
  tbl_appointment_copy1.belongsTo(tbl_appointment_types, { as: "app_type_1_tbl_appointment_type", foreignKey: "app_type_1"});
  tbl_appointment_types.hasMany(tbl_appointment_copy1, { as: "tbl_appointment_copy1s", foreignKey: "app_type_1"});
  tbl_pmtct.belongsTo(tbl_caregiver_not_on_care, { as: "care_giver", foreignKey: "care_giver_id"});
  tbl_caregiver_not_on_care.hasMany(tbl_pmtct, { as: "tbl_pmtcts", foreignKey: "care_giver_id"});
  tbl_appointment.belongsTo(tbl_client, { as: "client", foreignKey: "client_id"});
  tbl_client.hasMany(tbl_appointment, { as: "tbl_appointments", foreignKey: "client_id"});
  tbl_appointment_copy1.belongsTo(tbl_client, { as: "client", foreignKey: "client_id"});
  tbl_client.hasMany(tbl_appointment_copy1, { as: "tbl_appointment_copy1s", foreignKey: "client_id"});
  tbl_clnt_outcome.belongsTo(tbl_client, { as: "client", foreignKey: "client_id"});
  tbl_client.hasMany(tbl_clnt_outcome, { as: "tbl_clnt_outcomes", foreignKey: "client_id"});
  tbl_dfc_module.belongsTo(tbl_client, { as: "client", foreignKey: "client_id"});
  tbl_client.hasMany(tbl_dfc_module, { as: "tbl_dfc_modules", foreignKey: "client_id"});
  tbl_pmtct.belongsTo(tbl_client, { as: "client", foreignKey: "client_id"});
  tbl_client.hasMany(tbl_pmtct, { as: "tbl_pmtcts", foreignKey: "client_id"});
  tbl_tracer_client.belongsTo(tbl_client, { as: "client", foreignKey: "client_id"});
  tbl_client.hasMany(tbl_tracer_client, { as: "tbl_tracer_clients", foreignKey: "client_id"});
  tbl__logs_copy.belongsTo(tbl_clinic, { as: "clinic", foreignKey: "clinic_id"});
  tbl_clinic.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "clinic_id"});
  tbl_client.belongsTo(tbl_clinic, { as: "clinic", foreignKey: "clinic_id"});
  tbl_clinic.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "clinic_id"});
  tbl_client_backup.belongsTo(tbl_clinic, { as: "clinic", foreignKey: "clinic_id"});
  tbl_clinic.hasMany(tbl_client_backup, { as: "tbl_client_backups", foreignKey: "clinic_id"});
  tbl_client_copy.belongsTo(tbl_clinic, { as: "clinic", foreignKey: "clinic_id"});
  tbl_clinic.hasMany(tbl_client_copy, { as: "tbl_client_copies", foreignKey: "clinic_id"});
  tbl_client_copy1.belongsTo(tbl_clinic, { as: "clinic", foreignKey: "clinic_id"});
  tbl_clinic.hasMany(tbl_client_copy1, { as: "tbl_client_copy1s", foreignKey: "clinic_id"});
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
  tbl_client_backup.belongsTo(tbl_gender, { as: "gender_tbl_gender", foreignKey: "gender"});
  tbl_gender.hasMany(tbl_client_backup, { as: "tbl_client_backups", foreignKey: "gender"});
  tbl_client_copy.belongsTo(tbl_gender, { as: "gender_tbl_gender", foreignKey: "gender"});
  tbl_gender.hasMany(tbl_client_copy, { as: "tbl_client_copies", foreignKey: "gender"});
  tbl_client_copy1.belongsTo(tbl_gender, { as: "gender_tbl_gender", foreignKey: "gender"});
  tbl_gender.hasMany(tbl_client_copy1, { as: "tbl_client_copy1s", foreignKey: "gender"});
  tbl_client_list_new.belongsTo(tbl_gender, { as: "gender", foreignKey: "gender_id"});
  tbl_gender.hasMany(tbl_client_list_new, { as: "tbl_client_list_news", foreignKey: "gender_id"});
  tbl_content.belongsTo(tbl_gender, { as: "gender", foreignKey: "gender_id"});
  tbl_gender.hasMany(tbl_content, { as: "tbl_contents", foreignKey: "gender_id"});
  tbl_pmtct.belongsTo(tbl_gender, { as: "hei_gender_tbl_gender", foreignKey: "hei_gender"});
  tbl_gender.hasMany(tbl_pmtct, { as: "tbl_pmtcts", foreignKey: "hei_gender"});
  tbl__logs_copy.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "group_id"});
  tbl_client.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "group_id"});
  tbl_client_backup.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl_client_backup, { as: "tbl_client_backups", foreignKey: "group_id"});
  tbl_client_copy.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl_client_copy, { as: "tbl_client_copies", foreignKey: "group_id"});
  tbl_client_copy1.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl_client_copy1, { as: "tbl_client_copy1s", foreignKey: "group_id"});
  tbl_client_list_new.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl_client_list_new, { as: "tbl_client_list_news", foreignKey: "group_id"});
  tbl_content.belongsTo(tbl_groups, { as: "group", foreignKey: "group_id"});
  tbl_groups.hasMany(tbl_content, { as: "tbl_contents", foreignKey: "group_id"});
  tbl_responses.belongsTo(tbl_incoming, { as: "incoming", foreignKey: "incoming_id"});
  tbl_incoming.hasOne(tbl_responses, { as: "tbl_response", foreignKey: "incoming_id"});
  tbl__logs_copy.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "language_id"});
  tbl_client.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "language_id"});
  tbl_client_backup.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_client_backup, { as: "tbl_client_backups", foreignKey: "language_id"});
  tbl_client_copy.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_client_copy, { as: "tbl_client_copies", foreignKey: "language_id"});
  tbl_client_copy1.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_client_copy1, { as: "tbl_client_copy1s", foreignKey: "language_id"});
  tbl_client_list_new.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_client_list_new, { as: "tbl_client_list_news", foreignKey: "language_id"});
  tbl_content.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_content, { as: "tbl_contents", foreignKey: "language_id"});
  tbl_messages.belongsTo(tbl_language, { as: "language", foreignKey: "language_id"});
  tbl_language.hasMany(tbl_messages, { as: "tbl_messages", foreignKey: "language_id"});
  tbl__logs_copy.belongsTo(tbl_marital_status, { as: "marital_tbl_marital_status", foreignKey: "marital"});
  tbl_marital_status.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "marital"});
  tbl_client.belongsTo(tbl_marital_status, { as: "marital_tbl_marital_status", foreignKey: "marital"});
  tbl_marital_status.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "marital"});
  tbl_client_backup.belongsTo(tbl_marital_status, { as: "marital_tbl_marital_status", foreignKey: "marital"});
  tbl_marital_status.hasMany(tbl_client_backup, { as: "tbl_client_backups", foreignKey: "marital"});
  tbl_client_copy.belongsTo(tbl_marital_status, { as: "marital_tbl_marital_status", foreignKey: "marital"});
  tbl_marital_status.hasMany(tbl_client_copy, { as: "tbl_client_copies", foreignKey: "marital"});
  tbl_client_copy1.belongsTo(tbl_marital_status, { as: "marital_tbl_marital_status", foreignKey: "marital"});
  tbl_marital_status.hasMany(tbl_client_copy1, { as: "tbl_client_copy1s", foreignKey: "marital"});
  tbl_client_list_new.belongsTo(tbl_marital_status, { as: "marital", foreignKey: "marital_id"});
  tbl_marital_status.hasMany(tbl_client_list_new, { as: "tbl_client_list_news", foreignKey: "marital_id"});
  tbl__logs_copy.belongsTo(tbl_master_facility, { as: "mfl_code_tbl_master_facility", foreignKey: "mfl_code"});
  tbl_master_facility.hasMany(tbl__logs_copy, { as: "tbl__logs_copies", foreignKey: "mfl_code"});
  tbl_client.belongsTo(tbl_master_facility, { as: "mfl_code_tbl_master_facility", foreignKey: "mfl_code"});
  tbl_master_facility.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "mfl_code"});
  tbl_client_backup.belongsTo(tbl_master_facility, { as: "mfl_code_tbl_master_facility", foreignKey: "mfl_code"});
  tbl_master_facility.hasMany(tbl_client_backup, { as: "tbl_client_backups", foreignKey: "mfl_code"});
  tbl_client_copy.belongsTo(tbl_master_facility, { as: "mfl_code_tbl_master_facility", foreignKey: "mfl_code"});
  tbl_master_facility.hasMany(tbl_client_copy, { as: "tbl_client_copies", foreignKey: "mfl_code"});
  tbl_client_copy1.belongsTo(tbl_master_facility, { as: "mfl_code_tbl_master_facility", foreignKey: "mfl_code"});
  tbl_master_facility.hasMany(tbl_client_copy1, { as: "tbl_client_copy1s", foreignKey: "mfl_code"});
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
  tbl_client_backup.belongsTo(tbl_partner, { as: "partner", foreignKey: "partner_id"});
  tbl_partner.hasMany(tbl_client_backup, { as: "tbl_client_backups", foreignKey: "partner_id"});
  tbl_client_copy.belongsTo(tbl_partner, { as: "partner", foreignKey: "partner_id"});
  tbl_partner.hasMany(tbl_client_copy, { as: "tbl_client_copies", foreignKey: "partner_id"});
  tbl_client_copy1.belongsTo(tbl_partner, { as: "partner", foreignKey: "partner_id"});
  tbl_partner.hasMany(tbl_client_copy1, { as: "tbl_client_copy1s", foreignKey: "partner_id"});
  tbl_client.belongsTo(tbl_pmtct, { as: "hei_no_tbl_pmtct", foreignKey: "hei_no"});
  tbl_pmtct.hasMany(tbl_client, { as: "tbl_clients", foreignKey: "hei_no"});
  tbl_client_backup.belongsTo(tbl_pmtct, { as: "hei_no_tbl_pmtct", foreignKey: "hei_no"});
  tbl_pmtct.hasMany(tbl_client_backup, { as: "tbl_client_backups", foreignKey: "hei_no"});
  tbl_client_copy.belongsTo(tbl_pmtct, { as: "hei_no_tbl_pmtct", foreignKey: "hei_no"});
  tbl_pmtct.hasMany(tbl_client_copy, { as: "tbl_client_copies", foreignKey: "hei_no"});
  tbl_client_copy1.belongsTo(tbl_pmtct, { as: "hei_no_tbl_pmtct", foreignKey: "hei_no"});
  tbl_pmtct.hasMany(tbl_client_copy1, { as: "tbl_client_copy1s", foreignKey: "hei_no"});
  tbl_role_module.belongsTo(tbl_role, { as: "role", foreignKey: "role_id"});
  tbl_role.hasMany(tbl_role_module, { as: "tbl_role_modules", foreignKey: "role_id"});
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
  tbl_client_type.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_client_type, { as: "tbl_client_types", foreignKey: "created_by"});
  tbl_client_type.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_client_type, { as: "updated_by_tbl_client_types", foreignKey: "updated_by"});
  tbl_dfc_module.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_dfc_module, { as: "tbl_dfc_modules", foreignKey: "created_by"});
  tbl_dfc_module.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_dfc_module, { as: "updated_by_tbl_dfc_modules", foreignKey: "updated_by"});
  tbl_entry_point.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_entry_point, { as: "tbl_entry_points", foreignKey: "created_by"});
  tbl_entry_point.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_entry_point, { as: "updated_by_tbl_entry_points", foreignKey: "updated_by"});
  tbl_motivational_enable.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_motivational_enable, { as: "tbl_motivational_enables", foreignKey: "created_by"});
  tbl_motivational_enable.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_motivational_enable, { as: "updated_by_tbl_motivational_enables", foreignKey: "updated_by"});
  tbl_otp.belongsTo(tbl_users, { as: "user", foreignKey: "user_id"});
  tbl_users.hasMany(tbl_otp, { as: "tbl_otps", foreignKey: "user_id"});
  tbl_pmtct.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_pmtct, { as: "tbl_pmtcts", foreignKey: "created_by"});
  tbl_pmtct.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_pmtct, { as: "updated_by_tbl_pmtcts", foreignKey: "updated_by"});
  tbl_tracer_client.belongsTo(tbl_users, { as: "tracer", foreignKey: "tracer_id"});
  tbl_users.hasMany(tbl_tracer_client, { as: "tbl_tracer_clients", foreignKey: "tracer_id"});
  tbl_tracer_client.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_tracer_client, { as: "created_by_tbl_tracer_clients", foreignKey: "created_by"});
  tbl_tracer_client.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_tracer_client, { as: "updated_by_tbl_tracer_clients", foreignKey: "updated_by"});
  tbl_tracers.belongsTo(tbl_users, { as: "user", foreignKey: "user_id"});
  tbl_users.hasMany(tbl_tracers, { as: "tbl_tracers", foreignKey: "user_id"});
  tbl_tracers.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_tracers, { as: "created_by_tbl_tracers", foreignKey: "created_by"});
  tbl_tracers.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_tracers, { as: "updated_by_tbl_tracers", foreignKey: "updated_by"});
  tbl_wellness_enable.belongsTo(tbl_users, { as: "created_by_tbl_user", foreignKey: "created_by"});
  tbl_users.hasMany(tbl_wellness_enable, { as: "tbl_wellness_enables", foreignKey: "created_by"});
  tbl_wellness_enable.belongsTo(tbl_users, { as: "updated_by_tbl_user", foreignKey: "updated_by"});
  tbl_users.hasMany(tbl_wellness_enable, { as: "updated_by_tbl_wellness_enables", foreignKey: "updated_by"});
  tbl_master_facility.belongsTo(tbl_ward, { as: "Ward", foreignKey: "Ward_id"});
  tbl_ward.hasMany(tbl_master_facility, { as: "tbl_master_facilities", foreignKey: "Ward_id"});

  return {
    cache,
    il_messages,
    jobs,
    message,
    send_log,
    sender_status,
    tbl__logs_copy,
    tbl_access_level,
    tbl_appointment,
    tbl_appointment_copy1,
    tbl_appointment_msgs,
    tbl_appointment_types,
    tbl_broadcast,
    tbl_caregiver_not_on_care,
    tbl_client,
    tbl_client_backup,
    tbl_client_copy,
    tbl_client_copy1,
    tbl_client_list_new,
    tbl_client_log,
    tbl_client_restore,
    tbl_client_type,
    tbl_clinic,
    tbl_clnt_outcome,
    tbl_clnt_outgoing,
    tbl_clnt_ushauri,
    tbl_community_model,
    tbl_condition,
    tbl_consituency,
    tbl_content,
    tbl_county,
    tbl_defaulted_query,
    tbl_dfc_module,
    tbl_disabled_clients,
    tbl_donor,
    tbl_email,
    tbl_email_debugger,
    tbl_entry_point,
    tbl_faces_report,
    tbl_facility_based,
    tbl_final_outcome,
    tbl_frequency,
    tbl_future_appointments_query,
    tbl_gender,
    tbl_groups,
    tbl_incoming,
    tbl_incoming_arch,
    tbl_language,
    tbl_lost,
    tbl_marital_status,
    tbl_master_facility,
    tbl_message_grouping,
    tbl_message_types,
    tbl_messages,
    tbl_missed_query,
    tbl_module,
    tbl_motivational_enable,
    tbl_not_ok,
    tbl_notfiable_time,
    tbl_notification_flow,
    tbl_ok,
    tbl_oru,
    tbl_other_appointment_types,
    tbl_other_final_outcome,
    tbl_otp,
    tbl_outcome,
    tbl_outcome_report_raw,
    tbl_partner,
    tbl_partner_facility,
    tbl_partner_type,
    tbl_past_appointment_new,
    tbl_past_appointments,
    tbl_pmtct,
    tbl_regimen,
    tbl_responses,
    tbl_role,
    tbl_role_module,
    tbl_secondary_grouping,
    tbl_sender,
    tbl_sent_logs,
    tbl_sent_status,
    tbl_sessions,
    tbl_sms_checkin,
    tbl_sms_queue,
    tbl_status,
    tbl_stop_alerts,
    tbl_sub_county,
    tbl_sys_logs,
    tbl_target_client,
    tbl_target_county,
    tbl_target_facility,
    tbl_time,
    tbl_todays_appointment,
    tbl_todays_appointment_query,
    tbl_tracer_client,
    tbl_tracers,
    tbl_tracing_type,
    tbl_transit_app,
    tbl_trcing_outcome,
    tbl_unrecognised,
    tbl_user_permission,
    tbl_users,
    tbl_usr_outgoing,
    tbl_ward,
    tbl_wellness_enable,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
