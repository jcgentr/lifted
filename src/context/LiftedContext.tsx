import * as React from "react";

type Action = { type: "addOrUpdateLift"; payload: Lift };
type Dispatch = (action: Action) => void;

export type LiftSetType = { reps: number; weight: number };
type Lift = { title: string; sets: LiftSetType[] };
type State = { date: Date; lifts: Lift[] };
type LiftedProviderProps = { children: React.ReactNode };

const LiftedStateContext = React.createContext<
	{ state: State; dispatch: Dispatch } | undefined
>(undefined);
LiftedStateContext.displayName = "Lifted";

function liftedReducer(state: State, action: Action) {
	switch (action.type) {
		case "addOrUpdateLift": {
			const liftIndex = state.lifts.findIndex(
				(lift) => lift.title === action.payload.title
			);
			if (liftIndex >= 0) {
				const copyOfLifts = [...state.lifts];
				copyOfLifts[liftIndex] = action.payload;
				return { ...state, lifts: [...copyOfLifts] };
			}
			return { ...state, lifts: [...state.lifts, action.payload] };
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

function LiftedProvider({ children }: LiftedProviderProps) {
	const [state, dispatch] = React.useReducer(liftedReducer, {
		date: new Date(),
		lifts: [],
	});
	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	const value = { state, dispatch };
	return (
		<LiftedStateContext.Provider value={value}>
			{children}
		</LiftedStateContext.Provider>
	);
}

function useLifted() {
	const context = React.useContext(LiftedStateContext);
	if (context === undefined) {
		throw new Error("useLifted must be used within a LiftedProvider");
	}
	return context;
}

export { LiftedProvider, useLifted };
