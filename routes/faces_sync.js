const {User} = require("../models_generated/tbl_users");
const {Clients} = require("../models_generated/tbl_client");
const {CareGiver} = require("../models_generated/tbl_caregiver_not_on_care");
const {Appointment} = require("../models_generated/tbl_appointment");
const {DFC} = require("../models_generated/tbl_dfc_module");
const {PMTCT} = require("../models_generated/tbl_pmtct")
const {OtherAppType} = require("../models_generated/tbl_other_appointment_types");
const {Transit} = require("../models_generated/tbl_transit_app");
const {OtherFnlOutcome} = require("../models_generated/tbl_other_final_outcome");
const {Broadcast} = require("../models_generated/tbl_broadcast");
const {ClientOutcome} = require("../models_generated/tbl_clnt_outcome");

const {UserFaces} = require("../models_faces/tbl_users");
const {ClientsFaces} = require("../models_faces/tbl_client");
const {CareGiverFaces} = require("../models_faces/tbl_caregiver_not_on_care");
const {AppointmentFaces} = require("../models_faces/tbl_appointment")
const {PmtctFaces} = require("../models_faces/tbl_pmtct")
const {DFCFaces} = require("../models_faces/tbl_dfc_module")
const { ClientOutcomeFaces} = require("../models_faces/tbl_clnt_outcome");
const {OtherAppTypeFaces} = require("../models_faces/tbl_other_appointment_types")
const {TransitFaces} = require("../models_faces/tbl_transit_app");
const {OtherFnlOutcomeFaces} = require("../models_faces/tbl_other_final_outcome");
const {BroadcastFaces} = require("../models_faces/tbl_broadcast");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const express = require("express");
const router = express.Router();

const _ = require("lodash");
const moment = require("moment");
const {contentDisposition} = require("express/lib/utils");
moment.tz.setDefault("Africa/Nairobi");

async function syncUsers() {
    try {
        let max_exisiting_user = await UserFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0
        // console.log(max_exisiting_user.id)

        let users = await User.findAll({
            where:
                {
                    partner_id: 18,
                    id: {
                        [Op.gte]: max_exisiting_user.id
                    }
                }
        })
        for (let i = 0; i < users.length; i++) {
            let userFaces = await UserFaces.findOne({where: {id: users[i].id}});
            if (!userFaces) {
                console.log("Inserting new User...")
                await UserFaces.create(users[i])
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            }
        }
        let updates_users = await User.findAll({
            where: {
                partner_id: 18,
                updated_at: {
                    [Op.gte]: moment().subtract(2, 'days').format("YYYY-MM-DD")
                }
            }
        });
        for (let i = 0; i < updates_users.length; i++) {
            let FoundUsers = await UserFaces.findOne({where: {id: updates_users[i].id}});
            if (FoundUsers) {
                console.log("Updating existing User...")
                await UserFaces.update(updates_users[i], {where: {id: updates_users[i].id}})
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            } else {
                console.log('wrong path')
                await UserFaces.create(updates_users[i])
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
            }
        }
        // $end_time = Carbon::now();

        // $this->send_email($start_time, $end_time, $users->count() + $updates_users->count() . " Users", $a_number . " Users", "Users sync");
        return true
    } catch (err) {
        console.log(err.message)
    }
}

async function sync_care_giver() {
    try {
        let max_existing_care_giver = await CareGiverFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0
        console.log(max_existing_care_giver)
        // $a_number = 0;
        // $start_time = Carbon::now();
        let care_givers = await CareGiver.findAll({
            include: {
                model: User,
                required: true,
                where: {
                    partner_id: 18
                }
            },
            where: {
                id: {[Op.gt]: max_existing_care_giver.id}
            },
            raw: true,
            nest: true
        })
        console.log(care_givers.length)
        //     join('tbl_users', 'tbl_caregiver_not_on_care.created_by', '=', 'tbl_users.id')->select('tbl_caregiver_not_on_care.*')
        // ->where('tbl_caregiver_not_on_care.id', '>', $max_exisiting_care_giver)
        // ->where('tbl_users.partner_id', 18)->get();
        for (let i = 0; i < care_givers.length; i++) {
            let careFACES = await CareGiverFaces.findOne({where: {id: care_givers[i].id}});
            if (!careFACES) {
                console.log(`Insert care giver details...${care_givers[i].id}`)
                CareGiverFaces.create(care_givers[i]);
                // $a_number += 1;
            }
        }
        //     $end_time = Carbon::now();
        //
        //     $this->send_email($start_time, $end_time, $care_givers->count() . " care givers", $a_number . " care givers", "Caregiver sync");
    } catch (e) {
        console.log(e)
        // $this->send_err_email($e->getMessage(), "Caregiver sync");
    }
}

async function syncClients() {
    try {
        let max_existing_client = await ClientsFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0
        // console.log(max_exisiting_user.id)

        let clients = await Clients.findAll({
            where:
                {
                    partner_id: 18,
                    id: {
                        [Op.gte]: max_existing_client.id
                    }
                }
        })
        for (let i = 0; i < clients.length; i++) {
            let clientFaces = await ClientsFaces.findOne({where: {id: clients[i].id}});
            if (!clientFaces) {
                console.log(`Inserting new Client...${clients[i]}`)
                await ClientsFaces.create(clients[i])
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            }
        }
        let updates_clients = await Clients.findAll({
            where: {
                partner_id: 18,
                updated_at: {
                    [Op.gte]: moment().subtract(2, 'days').format("YYYY-MM-DD")
                }
            }
        });
        for (let i = 0; i < updates_clients.length; i++) {
            let FoundClient = await ClientsFaces.findOne({where: {id: updates_clients[i].id}});
            if (FoundClient) {
                console.log("Updating existing Client")
                console.log(updates_clients[i])
                await ClientsFaces.update(updates_clients[i], {where: {id: updates_clients[i].id}})
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            } else {
                console.log('wrong path')
                await ClientsFaces.create(updates_clients[i])
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
            }
        }
        // $end_time = Carbon::now();

        // $this->send_email($start_time, $end_time, $users->count() + $updates_users->count() . " Users", $a_number . " Users", "Users sync");
        return true
    } catch (e) {
        console.log(e)
    }

}

async function syncAppointments() {
    try {
        let max_existing_appnt = await AppointmentFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0
        // console.log(max_exisiting_user.id)

        let appnts = await Appointment.findAll({
            include: {
                model: Clients,
                required: true,
                where: {
                    partner_id: 18
                }
            },
            where: {
                id: {[Op.gt]: max_existing_appnt.id}
            },
            raw: true,
            nest: true
        })
        for (let i = 0; i < appnts.length; i++) {
            let appntFaces = await AppointmentFaces.findOne({where: {id: appnts[i].id}});
            if (!appntFaces) {
                console.log(`Inserting new Appointment...${appnts[i].id}`)
                await AppointmentFaces.create(appnts[i])
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            }
        }

        let updates_appnt = await Appointment.findAll({
            include: {
                model: Clients,
                required: true,
                where: {
                    partner_id: 18
                }
            },
            where: {
                updated_at: {
                    [Op.gte]: moment().subtract(2, 'days').set({
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0
                    }).format("YYYY-MM-DD")
                }
            },
            raw: true,
            nest: true
        });

        console.log(updates_appnt.length)

        for (let i = 0; i < updates_appnt.length; i++) {
            let FoundApp = await AppointmentFaces.findOne({where: {id: updates_appnt[i].id}});
            if (FoundApp) {
                console.log("Updating existing Appointment")
                console.log(updates_appnt[i].id)
                await AppointmentFaces.update(updates_appnt[i], {where: {id: updates_appnt[i].id}})
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            } else {
                console.log('wrong path')
                await AppointmentFaces.create(updates_appnt[i])
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
            }
        }
        // $end_time = Carbon::now();

        // $this->send_email($start_time, $end_time, $users->count() + $updates_users->count() . " Users", $a_number . " Users", "Users sync");
        return true
    } catch (e) {
        console.log(e)
    }

}

async function syncPMTCT() {
    try {
        let max_existing_mother = await PmtctFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0

        let mother_module = await PMTCT.findAll({
            include: {
                model: User,
                required: true,
                where: {partner_id: 18}
            },
            where: {
                id: {[Op.gt]: max_existing_mother.id}
            },
            raw: true,
            nest: true
        })

        for (let i = 0; i < mother_module.length; i++) {
            let motherFACES = await PmtctFaces.findOne({where: {id: mother_module[i].id}});
            if (!motherFACES) {
                console.log(`Insert pmtct details...${mother_module[i].id}`)
                CareGiverFaces.create(mother_module[i]);
            }
        }
    } catch (e) {
        console.log(e)
    }
}

async function sync_dfc() {
    try {
        let max_existing_dfc = await DFCFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0

        let dfc_module = await DFC.findAll({
            include: {
                model: Clients,
                required: true,
                where: {partner_id: 18}
            },
            where: {
                id: {[Op.gt]: max_existing_dfc.id}
            },
            raw: true,
            nest: true
        })

        for (let i = 0; i < dfc_module.length; i++) {
            let dfcFACES = await DFCFaces.findOne({where: {id: dfc_module[i].id}});
            if (!dfcFACES) {
                console.log(`Insert pmtct details...${dfc_module[i].id}`)
                DFCFaces.create(dfc_module[i]);
            }
        }
    } catch (e) {
        console.log(e)
    }
}

async function syncClientOutcomes() {
    try {
        let max_existing_outcome = await ClientOutcomeFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0

        let client_outcomes = await ClientOutcome.findAll({
            include: {
                model: Clients,
                required: true,
                where: {partner_id: 18}
            },
            where: {
                id: {[Op.gt]: max_existing_outcome.id}
            },
            raw: true,
            nest: true
        })

        for (let i = 0; i < client_outcomes.length; i++) {
            let outcomesFaces = await ClientOutcomeFaces.findOne({where: {id: client_outcomes[i].id}});
            if (!outcomesFaces) {
                console.log(`Insert clie details...${client_outcomes[i].id}`)
                ClientOutcomeFaces.create(client_outcomes[i]);
            }
        }
    } catch (e) {
        console.log(e)
    }
}

async function syncOtherAppType() {
    try {
        let max_existing_other = await OtherAppTypeFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0

        let other_app_types = await OtherAppType.findAll({
            include: [
                {
                    model: User,
                    required: true,
                    where: {partner_id: 18}
                },
                {
                    model: Appointment,
                    required: false
                }],
            where: {
                id: {[Op.gt]: max_existing_other.id}
            },
            raw: true,
            nest: true
        })
        //     $other_app_types = OtherAppType::join('tbl_users', 'tbl_other_appointment_types.created_by', '=', 'tbl_users.id')
        // ->join('tbl_appointment', 'tbl_other_appointment_types.appointment_id', '=', 'tbl_appointment.id')
        // ->select('tbl_other_appointment_types.*')
        // ->where('tbl_other_appointment_types.id', '>', $max_exisiting_other_app_type)
        // ->where('tbl_users.partner_id', 18)->get();
        console.log(other_app_types.length)

        for (let i = 0; i < other_app_types.length; i++) {
            let check_app_existence = await OtherAppTypeFaces.findOne({where: {id: other_app_types[i].id}});
            if (!check_app_existence) {
                console.log(`Insert other app types details...${other_app_types[i].id}`)
                OtherAppTypeFaces.create(other_app_types[i]);

            }
        }
        //     $end_time = Carbon::now();
        //
        //     $this->send_email($start_time, $end_time, $care_givers->count() . " care givers", $a_number . " care givers", "Caregiver sync");
    } catch (e) {
        console.log(e)
        // $this->send_err_email($e->getMessage(), "Caregiver sync");
    }
}

async function syncTransitClients() {
    try {
        let max_existing_transit = await TransitFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0

        let sms_transits = await Transit.findAll({
            include: {
                model: Clients,
                required: true,
                where: {partner_id: 18}
            },
            where: {id: {[Op.gt]: max_existing_transit.id}},
            raw: true,
            nest: true
        })

        for (let i = 0; i < sms_transits.length; i++) {
            let transitFaces = await TransitFaces.findOne({where: {id: sms_transits[i].id}});
            if (!transitFaces) {
                console.log(`Insert transit client details...${sms_transits[i].id}`)
                TransitFaces.create(sms_transits[i]);
            }
        }
    } catch (e) {
        console.log(e)
    }
}

async function syncOtherFnlOutcome() {
    try {
        let max_existing_other_fnl_outcome = await OtherFnlOutcomeFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0

        let other_outcomes = await OtherFnlOutcome.findAll({
            include: {
                model: User,
                required: true,
                where: {partner_id: 18}
            },
            where: {
                id: {[Op.gt]: max_existing_other_fnl_outcome.id}
            },
            raw: true,
            nest: true
        })
        console.log(other_outcomes.length)

        for (let i = 0; i < other_outcomes.length; i++) {
            let check_Outcome_existence = await OtherFnlOutcomeFaces.findOne({where: {id: other_outcomes[i].id}});
            if (!check_Outcome_existence) {
                console.log(`Insert other final outcome details...${other_outcomes[i].id}`)
                OtherFnlOutcomeFaces.create(other_outcomes[i]);

            }
        }

    } catch (e) {
        console.log(e)
    }
}

async function syncBroadcast() {
    try {
        let max_existing_broadcast = await BroadcastFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0

        let broadcasts = await Broadcast.findAll({
            include: {
                model: User,
                required: true,
                where: {partner_id: 18}
            },
            where: {id: {[Op.gt]: max_existing_broadcast.id}},
            raw: true,
            nest: true
        })
        console.log(broadcasts.length)

        for (let i = 0; i < broadcasts.length; i++) {
            let check_Outcome_existence = await BroadcastFaces.findOne({where: {id: broadcasts[i].id}});
            if (!check_Outcome_existence) {
                console.log(`Insert broadcasts details...${broadcasts[i].id}`)
                BroadcastFaces.create(broadcasts[i]);
            }
        }

    } catch (e) {
        console.log(e)
    }

}

router.get("/", async (req, res) => {
    await syncUsers();
    await sync_care_giver();
    await syncClients();
    await syncAppointments();
    await syncPMTCT();
    await sync_dfc();
    await syncClientOutcomes();
    await syncOtherAppType();
    // await syncOtherFnlOutcome();
    // await syncBroadcast();
    // await syncSmsQueue();
    await syncTransitClients();
    // await syncUserOutgoing();
    //$this->syncClientOutgoing();t

    res.send('now')
});


module.exports = router;
