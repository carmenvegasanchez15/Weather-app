import { Collapse, IconButton, Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';

interface ErrorAlertProps {
    open: boolean,
    setOpen: (e: boolean) => any
}

const ErrorAlert = (props: ErrorAlertProps) => {
    const { open, setOpen } = props

    return (
        <Stack sx={{ width: '20%' }} className="mb-3 mx-right float-end">
            <Collapse in={open}>
                <Alert severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    No tenemos esa ciudad registrada
                </Alert>
            </Collapse>
        </Stack>
    )
}

export default ErrorAlert